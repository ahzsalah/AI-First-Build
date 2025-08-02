import { WebsiteIdeasService } from './website-ideas.service';
export declare class WebsiteIdeasController {
    private readonly websiteIdeasService;
    constructor(websiteIdeasService: WebsiteIdeasService);
    create(createWebsiteIdeaDto: {
        idea: string;
    }): Promise<import("./schemas/website-idea.schema").WebsiteIdea>;
    findAll(): Promise<import("./schemas/website-idea.schema").WebsiteIdea[]>;
    findOne(id: string): Promise<import("./schemas/website-idea.schema").WebsiteIdea | null>;
    update(id: string, updateWebsiteIdeaDto: {
        idea: string;
    }): Promise<import("./schemas/website-idea.schema").WebsiteIdea | null>;
    remove(id: string): Promise<import("./schemas/website-idea.schema").WebsiteIdea | null>;
}
