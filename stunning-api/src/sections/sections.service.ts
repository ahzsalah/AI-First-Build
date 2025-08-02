import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  WebsiteIdea,
  WebsiteIdeaDocument,
} from '../website-ideas/schemas/website-idea.schema';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(WebsiteIdea.name)
    private websiteIdeaModel: Model<WebsiteIdeaDocument>,
  ) {}

  async getAllWebsiteIdeas(): Promise<WebsiteIdea[]> {
    return this.websiteIdeaModel.find().exec();
  }

  async getWebsiteIdeaById(id: string): Promise<WebsiteIdea | null> {
    return this.websiteIdeaModel.findById(id).exec();
  }

  async createWebsiteIdea(idea: string): Promise<WebsiteIdea> {
    // Always use default sections
    const defaultSections = ['Hero', 'About', 'Contact'];

    const newWebsiteIdea = new this.websiteIdeaModel({
      idea,
      sections: defaultSections,
    });
    return newWebsiteIdea.save();
  }

  async updateWebsiteIdea(
    id: string,
    idea: string,
    sections: string[] = [],
  ): Promise<WebsiteIdea | null> {
    return this.websiteIdeaModel
      .findByIdAndUpdate(id, { idea, sections }, { new: true })
      .exec();
  }

  async deleteWebsiteIdea(id: string): Promise<WebsiteIdea | null> {
    return this.websiteIdeaModel.findByIdAndDelete(id).exec();
  }

  async getWebsiteIdeasCount(): Promise<number> {
    return this.websiteIdeaModel.countDocuments().exec();
  }
}
