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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Document_1 = __importDefault(require("./Document"));
var DocumentFile = (function () {
    function DocumentFile() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "person_document_file_id" }),
        __metadata("design:type", String)
    ], DocumentFile.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Document_1.default; }, function (document) { return document.files; }),
        typeorm_1.JoinColumn({
            name: "person_document_id",
            referencedColumnName: "person_document_id",
        }),
        __metadata("design:type", Document_1.default)
    ], DocumentFile.prototype, "document", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DocumentFile.prototype, "filename", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DocumentFile.prototype, "mimetype", void 0);
    DocumentFile = __decorate([
        typeorm_1.Entity("person_document_file")
    ], DocumentFile);
    return DocumentFile;
}());
exports.default = DocumentFile;
