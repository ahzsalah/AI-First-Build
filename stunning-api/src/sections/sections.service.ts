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

  async createWebsiteIdea(
    idea: string,
    sections: string[] = [],
  ): Promise<WebsiteIdea> {
    // Automatically assign default sections if none provided
    const defaultSections = ['Hero', 'About', 'Contact'];
    const finalSections = sections.length > 0 ? sections : defaultSections;

    const newWebsiteIdea = new this.websiteIdeaModel({
      idea,
      sections: finalSections,
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
