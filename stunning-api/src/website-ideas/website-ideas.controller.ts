import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WebsiteIdeasService } from './website-ideas.service';

@Controller('website-ideas')
export class WebsiteIdeasController {
  constructor(private readonly websiteIdeasService: WebsiteIdeasService) {}

  @Post()
  create(@Body() createWebsiteIdeaDto: { idea: string }) {
    return this.websiteIdeasService.create(createWebsiteIdeaDto);
  }

  @Get()
  findAll() {
    return this.websiteIdeasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.websiteIdeasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWebsiteIdeaDto: { idea: string },
  ) {
    return this.websiteIdeasService.update(id, updateWebsiteIdeaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.websiteIdeasService.remove(id);
  }
}
