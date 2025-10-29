// NestJS Module for Ghibli-style image generation and animation
import { Module } from '@nestjs/common';
import { PixelAnimatorService } from './pixel-animator.service';
import { GenerationController } from './generation.controller';

@Module({
  controllers: [GenerationController],
  providers: [PixelAnimatorService],
  exports: [PixelAnimatorService],
})
export class GenerationModule {}
