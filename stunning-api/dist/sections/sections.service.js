"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const website_idea_schema_1 = require("../website-ideas/schemas/website-idea.schema");
let SectionsService = class SectionsService {
    websiteIdeaModel;
    constructor(websiteIdeaModel) {
        this.websiteIdeaModel = websiteIdeaModel;
    }
    async getAllWebsiteIdeas() {
        return this.websiteIdeaModel.find().exec();
    }
    async getWebsiteIdeaById(id) {
        return this.websiteIdeaModel.findById(id).exec();
    }
    async createWebsiteIdea(idea, sections = []) {
        const defaultSections = ['Hero', 'About', 'Contact'];
        const finalSections = sections.length > 0 ? sections : defaultSections;
        const newWebsiteIdea = new this.websiteIdeaModel({
            idea,
            sections: finalSections,
        });
        return newWebsiteIdea.save();
    }
    async updateWebsiteIdea(id, idea, sections = []) {
        return this.websiteIdeaModel
            .findByIdAndUpdate(id, { idea, sections }, { new: true })
            .exec();
    }
    async deleteWebsiteIdea(id) {
        return this.websiteIdeaModel.findByIdAndDelete(id).exec();
    }
    async getWebsiteIdeasCount() {
        return this.websiteIdeaModel.countDocuments().exec();
    }
};
exports.SectionsService = SectionsService;
exports.SectionsService = SectionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(website_idea_schema_1.WebsiteIdea.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SectionsService);
//# sourceMappingURL=sections.service.js.map