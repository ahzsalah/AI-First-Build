import { Model } from 'mongoose';
import { WebsiteIdea, WebsiteIdeaDocument } from './schemas/website-idea.schema';
export declare class WebsiteIdeasService {
    private websiteIdeaModel;
    constructor(websiteIdeaModel: Model<WebsiteIdeaDocument>);
    create(createWebsiteIdeaDto: {
        idea: string;
    }): Promise<WebsiteIdea>;
    findAll(): Promise<WebsiteIdea[]>;
    findOne(id: string): Promise<WebsiteIdea | null>;
    update(id: string, updateWebsiteIdeaDto: {
        idea: string;
    }): Promise<WebsiteIdea | null>;
    remove(id: string): Promise<WebsiteIdea | null>;
}
