import { Model } from 'mongoose';
import { WebsiteIdea, WebsiteIdeaDocument } from '../website-ideas/schemas/website-idea.schema';
export declare class SectionsService {
    private websiteIdeaModel;
    constructor(websiteIdeaModel: Model<WebsiteIdeaDocument>);
    getAllWebsiteIdeas(): Promise<WebsiteIdea[]>;
    getWebsiteIdeaById(id: string): Promise<WebsiteIdea | null>;
    createWebsiteIdea(idea: string): Promise<WebsiteIdea>;
    updateWebsiteIdea(id: string, idea: string): Promise<WebsiteIdea | null>;
    deleteWebsiteIdea(id: string): Promise<WebsiteIdea | null>;
    getWebsiteIdeasCount(): Promise<number>;
}
