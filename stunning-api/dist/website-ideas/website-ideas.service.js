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
exports.WebsiteIdeasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const website_idea_schema_1 = require("./schemas/website-idea.schema");
let WebsiteIdeasService = class WebsiteIdeasService {
    websiteIdeaModel;
    constructor(websiteIdeaModel) {
        this.websiteIdeaModel = websiteIdeaModel;
    }
    async create(createWebsiteIdeaDto) {
        const createdWebsiteIdea = new this.websiteIdeaModel(createWebsiteIdeaDto);
        return createdWebsiteIdea.save();
    }
    async findAll() {
        return this.websiteIdeaModel.find().exec();
    }
    async findOne(id) {
        return this.websiteIdeaModel.findById(id).exec();
    }
    async update(id, updateWebsiteIdeaDto) {
        return this.websiteIdeaModel
            .findByIdAndUpdate(id, updateWebsiteIdeaDto, { new: true })
            .exec();
    }
    async remove(id) {
        return this.websiteIdeaModel.findByIdAndDelete(id).exec();
    }
};
exports.WebsiteIdeasService = WebsiteIdeasService;
exports.WebsiteIdeasService = WebsiteIdeasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(website_idea_schema_1.WebsiteIdea.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WebsiteIdeasService);
//# sourceMappingURL=website-ideas.service.js.map