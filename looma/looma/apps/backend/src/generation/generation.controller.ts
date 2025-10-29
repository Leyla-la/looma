// NestJS Controller for image generation and pixel animation
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { mkdirSync, existsSync } from 'fs';
import { PixelAnimatorService } from './pixel-animator.service';

@Controller('generation')
export class GenerationController {
  private readonly logger = new Logger(GenerationController.name);
  private readonly uploadPath = join(process.cwd(), 'uploads');
  private readonly outputPath = join(process.cwd(), 'outputs');

  constructor(private readonly pixelAnimator: PixelAnimatorService) {
    // Ensure directories exist
    [this.uploadPath, this.outputPath].forEach((dir) => {
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
    });
  }

  @Post('pixelate')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, join(process.cwd(), 'uploads'));
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `upload-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
          return cb(
            new BadRequestException('Only image files are allowed!'),
            false,
          );
        }
        cb(null, true);
      },
      limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
    }),
  )
  async pixelateImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    try {
      this.logger.log(`Processing uploaded file: ${file.filename}`);

      const inputPath = file.path;
      const outputDir = join(
        this.outputPath,
        `ghibli-${Date.now()}`,
      );
      mkdirSync(outputDir, { recursive: true });

      // Run Ghibli animation pipeline
      const result = await this.pixelAnimator.processToGhibliAnimation(
        inputPath,
        outputDir,
        {
          pixelSize: 32,
          frameCount: 12,
          applyColors: true,
        },
      );

      return {
        success: true,
        message: 'Image processed successfully',
        data: {
          pixelated: result.pixelatedPath.replace(process.cwd(), ''),
          frames: result.framePaths.map((p) => p.replace(process.cwd(), '')),
          frameCount: result.framePaths.length,
        },
      };
    } catch (error) {
      this.logger.error(`Error processing image: ${error.message}`);
      throw new BadRequestException('Failed to process image');
    }
  }

  @Post('pixelate-simple')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads'),
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `upload-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async pixelateSimple(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    try {
      const inputPath = file.path;
      const outputPath = join(
        this.outputPath,
        `pixelated-${Date.now()}.png`,
      );

      await this.pixelAnimator.pixelateImage(inputPath, outputPath, 32);

      return {
        success: true,
        message: 'Image pixelated successfully',
        data: {
          output: outputPath.replace(process.cwd(), ''),
        },
      };
    } catch (error) {
      this.logger.error(`Error: ${error.message}`);
      throw new BadRequestException('Failed to pixelate image');
    }
  }
}
