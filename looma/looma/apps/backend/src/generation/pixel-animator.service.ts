// NestJS Service: Convert static images to 8-bit Ghibli animated GIFs
import { Injectable, Logger } from '@nestjs/common';
import sharp from 'sharp';

@Injectable()
export class PixelAnimatorService {
  private readonly logger = new Logger(PixelAnimatorService.name);

  // Ghibli color palette (32 colors for 8-bit aesthetic)
  private readonly ghibliPalette = [
    '#F5F5DC', '#A8D5BA', '#B0C4DE', '#FFDAB9', '#FFB6C1', '#E6E6FA',
    '#90EE90', '#6B8E23', '#D2B48C', '#FAFAFA', '#E0E0E0', '#4A4A4A',
    '#2C3E50', '#87CEEB', '#98D8C8', '#F7DC6F', '#EC7063', '#AF7AC5',
    '#5DADE2', '#48C9B0', '#F8B195', '#F67280', '#C06C84', '#6C5B7B',
    '#355C7D', '#99B898', '#FECEA8', '#FF847C', '#E84A5F', '#2A363B',
    '#A8E6CF', '#DCEDC1',
  ];

  /**
   * Convert a static image to 8-bit pixelated style with Ghibli palette
   * @param inputPath - Path to input image
   * @param outputPath - Path to save pixelated output
   * @param pixelSize - Size of pixels (smaller = more pixelated)
   */
  async pixelateImage(
    inputPath: string,
    outputPath: string,
    pixelSize = 32,
  ): Promise<string> {
    try {
      this.logger.log(`Pixelating image: ${inputPath} with size ${pixelSize}`);

      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Step 1: Downscale to create pixel effect
      const downscaled = await image
        .resize(pixelSize, pixelSize, {
          kernel: 'nearest', // No interpolation for crisp pixels
          fit: 'inside',
        })
        .toBuffer();

      // Step 2: Upscale back to original size (maintaining pixel blocks)
      await sharp(downscaled)
        .resize(metadata.width, metadata.height, {
          kernel: 'nearest', // Keep pixels blocky
        })
        .png({ palette: true, colors: 32 }) // Apply 32-color palette
        .toFile(outputPath);

      this.logger.log(`Pixelated image saved: ${outputPath}`);
      return outputPath;
    } catch (error) {
      this.logger.error(`Error pixelating image: ${error.message}`);
      throw error;
    }
  }

  /**
   * Create a bouncing animation effect (multiple frames)
   * @param inputPath - Path to pixelated input
   * @param outputDir - Directory to save frames
   * @param frameCount - Number of animation frames
   */
  async createBouncingFrames(
    inputPath: string,
    outputDir: string,
    frameCount = 12,
  ): Promise<string[]> {
    try {
      this.logger.log(`Creating ${frameCount} bouncing frames from ${inputPath}`);

      const image = sharp(inputPath);
      const metadata = await image.metadata();
      const framePaths: string[] = [];

      for (let i = 0; i < frameCount; i++) {
        // Calculate bounce offset using sine wave
        const progress = i / frameCount;
        const bounceY = Math.sin(progress * Math.PI * 2) * 20; // 20px bounce
        const scaleY = 1 - Math.abs(bounceY) / 40; // Squash/stretch effect

        const framePath = `${outputDir}/frame-${String(i).padStart(3, '0')}.png`;

        // Apply transform
        await image
          .clone()
          .extend({
            top: Math.max(0, Math.floor(-bounceY)),
            bottom: Math.max(0, Math.floor(bounceY)),
            background: { r: 255, g: 255, b: 255, alpha: 0 },
          })
          .resize({
            width: metadata.width,
            height: Math.floor(metadata.height! * scaleY),
            fit: 'fill',
            kernel: 'nearest',
          })
          .toFile(framePath);

        framePaths.push(framePath);
      }

      this.logger.log(`Created ${framePaths.length} animation frames`);
      return framePaths;
    } catch (error) {
      this.logger.error(`Error creating frames: ${error.message}`);
      throw error;
    }
  }

  /**
   * Apply Ghibli-style color grading
   * @param inputPath - Input image path
   * @param outputPath - Output image path
   */
  async applyGhibliColors(
    inputPath: string,
    outputPath: string,
  ): Promise<string> {
    try {
      this.logger.log(`Applying Ghibli color grading to ${inputPath}`);

      await sharp(inputPath)
        .modulate({
          brightness: 1.05, // Slightly brighter
          saturation: 1.15, // More saturated (Ghibli style)
          hue: 0,
        })
        .tint({ r: 255, g: 250, b: 240 }) // Warm cream tint
        .toFile(outputPath);

      this.logger.log(`Ghibli colors applied: ${outputPath}`);
      return outputPath;
    } catch (error) {
      this.logger.error(`Error applying colors: ${error.message}`);
      throw error;
    }
  }

  /**
   * Full pipeline: Image → 8-bit Ghibli style with animation frames
   * @param inputPath - Original image
   * @param outputDir - Directory for output files
   * @param options - Customization options
   */
  async processToGhibliAnimation(
    inputPath: string,
    outputDir: string,
    options: {
      pixelSize?: number;
      frameCount?: number;
      applyColors?: boolean;
    } = {},
  ): Promise<{
    pixelatedPath: string;
    framePaths: string[];
  }> {
    const { pixelSize = 32, frameCount = 12, applyColors = true } = options;

    try {
      this.logger.log(`Starting Ghibli animation pipeline for ${inputPath}`);

      // Step 1: Apply Ghibli colors (optional)
      let processedPath = inputPath;
      if (applyColors) {
        const coloredPath = `${outputDir}/colored.png`;
        processedPath = await this.applyGhibliColors(inputPath, coloredPath);
      }

      // Step 2: Pixelate
      const pixelatedPath = `${outputDir}/pixelated.png`;
      await this.pixelateImage(processedPath, pixelatedPath, pixelSize);

      // Step 3: Create animation frames
      const framePaths = await this.createBouncingFrames(
        pixelatedPath,
        outputDir,
        frameCount,
      );

      this.logger.log(`Ghibli animation pipeline complete`);
      return { pixelatedPath, framePaths };
    } catch (error) {
      this.logger.error(`Pipeline error: ${error.message}`);
      throw error;
    }
  }
}
