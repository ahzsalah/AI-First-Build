import { Document } from 'mongoose';
export type WebsiteIdeaDocument = WebsiteIdea & Document;
export declare class WebsiteIdea {
    idea: string;
}
export declare const WebsiteIdeaSchema: import("mongoose").Schema<WebsiteIdea, import("mongoose").Model<WebsiteIdea, any, any, any, Document<unknown, any, WebsiteIdea, any, {}> & WebsiteIdea & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WebsiteIdea, Document<unknown, {}, import("mongoose").FlatRecord<WebsiteIdea>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<WebsiteIdea> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
