import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  WebsiteIdea,
  WebsiteIdeaDocument,
} from './schemas/website-idea.schema';

@Injectable()
export class WebsiteIdeasService {
  constructor(
    @InjectModel(WebsiteIdea.name)
    private websiteIdeaModel: Model<WebsiteIdeaDocument>,
  ) {}

  async create(createWebsiteIdeaDto: { idea: string }): Promise<WebsiteIdea> {
    const createdWebsiteIdea = new this.websiteIdeaModel(createWebsiteIdeaDto);
    return createdWebsiteIdea.save();
  }

  async findAll(): Promise<WebsiteIdea[]> {
    return this.websiteIdeaModel.find().exec();
  }

  async findOne(id: string): Promise<WebsiteIdea | null> {
    return this.websiteIdeaModel.findById(id).exec();
  }

  async update(
    id: string,
    updateWebsiteIdeaDto: { idea: string },
  ): Promise<WebsiteIdea | null> {
    return this.websiteIdeaModel
      .findByIdAndUpdate(id, updateWebsiteIdeaDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<WebsiteIdea | null> {
    return this.websiteIdeaModel.findByIdAndDelete(id).exec();
  }
}
