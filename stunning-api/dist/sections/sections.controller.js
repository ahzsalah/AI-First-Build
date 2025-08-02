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
exports.SectionsController = void 0;
const common_1 = require("@nestjs/common");
const sections_service_1 = require("./sections.service");
let SectionsController = class SectionsController {
    sectionsService;
    constructor(sectionsService) {
        this.sectionsService = sectionsService;
    }
    getAllSections() {
        return this.sectionsService.getAllWebsiteIdeas();
    }
    getAllWebsiteIdeas() {
        return this.sectionsService.getAllWebsiteIdeas();
    }
    getWebsiteIdeasCount() {
        return this.sectionsService.getWebsiteIdeasCount();
    }
    getWebsiteIdeaById(id) {
        return this.sectionsService.getWebsiteIdeaById(id);
    }
    createWebsiteIdea(createDto) {
        return this.sectionsService.createWebsiteIdea(createDto.idea, createDto.sections);
    }
    updateWebsiteIdea(id, updateDto) {
        return this.sectionsService.updateWebsiteIdea(id, updateDto.idea, updateDto.sections);
    }
    deleteWebsiteIdea(id) {
        return this.sectionsService.deleteWebsiteIdea(id);
    }
    generateSections(generateDto) {
        return this.sectionsService.createWebsiteIdea(generateDto.idea, generateDto.sections);
    }
};
exports.SectionsController = SectionsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SectionsController.prototype, "getAllSections", null);
__decorate([
    (0, common_1.Get)('website-ideas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SectionsController.prototype, "getAllWebsiteIdeas", null);
__decorate([
    (0, common_1.Get)('website-ideas/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SectionsController.prototype, "getWebsiteIdeasCount", null);
__decorate([
    (0, common_1.Get)('website-ideas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SectionsController.prototype, "getWebsiteIdeaById", null);
__decorate([
    (0, common_1.Post)('website-ideas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SectionsController.prototype, "createWebsiteIdea", null);
__decorate([
    (0, common_1.Patch)('website-ideas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SectionsController.prototype, "updateWebsiteIdea", null);
__decorate([
    (0, common_1.Delete)('website-ideas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SectionsController.prototype, "deleteWebsiteIdea", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SectionsController.prototype, "generateSections", null);
exports.SectionsController = SectionsController = __decorate([
    (0, common_1.Controller)('sections'),
    __metadata("design:paramtypes", [sections_service_1.SectionsService])
], SectionsController);
//# sourceMappingURL=sections.controller.js.map