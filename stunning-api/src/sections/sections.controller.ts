import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Get()
  getAllSections() {
    return this.sectionsService.getAllWebsiteIdeas();
  }

  @Get('website-ideas')
  getAllWebsiteIdeas() {
    return this.sectionsService.getAllWebsiteIdeas();
  }

  @Get('website-ideas/count')
  getWebsiteIdeasCount() {
    return this.sectionsService.getWebsiteIdeasCount();
  }

  @Get('website-ideas/:id')
  getWebsiteIdeaById(@Param('id') id: string) {
    return this.sectionsService.getWebsiteIdeaById(id);
  }

  @Post('website-ideas')
  createWebsiteIdea(@Body() createDto: { idea: string; sections?: string[] }) {
    return this.sectionsService.createWebsiteIdea(
      createDto.idea,
      createDto.sections,
    );
  }

  @Patch('website-ideas/:id')
  updateWebsiteIdea(
    @Param('id') id: string,
    @Body() updateDto: { idea: string; sections?: string[] },
  ) {
    return this.sectionsService.updateWebsiteIdea(
      id,
      updateDto.idea,
      updateDto.sections,
    );
  }

  @Delete('website-ideas/:id')
  deleteWebsiteIdea(@Param('id') id: string) {
    return this.sectionsService.deleteWebsiteIdea(id);
  }

  @Post('generate')
  generateSections(@Body() generateDto: { idea: string; sections?: string[] }) {
    return this.sectionsService.createWebsiteIdea(
      generateDto.idea,
      generateDto.sections,
    );
  }
}
