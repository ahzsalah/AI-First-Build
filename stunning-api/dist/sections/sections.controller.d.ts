import { SectionsService } from './sections.service';
export declare class SectionsController {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    getAllWebsiteIdeas(): Promise<import("../website-ideas/schemas/website-idea.schema").WebsiteIdea[]>;
    getWebsiteIdeasCount(): Promise<number>;
    getWebsiteIdeaById(id: string): Promise<import("../website-ideas/schemas/website-idea.schema").WebsiteIdea | null>;
    createWebsiteIdea(createDto: {
        idea: string;
    }): Promise<import("../website-ideas/schemas/website-idea.schema").WebsiteIdea>;
    updateWebsiteIdea(id: string, updateDto: {
        idea: string;
    }): Promise<import("../website-ideas/schemas/website-idea.schema").WebsiteIdea | null>;
    deleteWebsiteIdea(id: string): Promise<import("../website-ideas/schemas/website-idea.schema").WebsiteIdea | null>;
}
