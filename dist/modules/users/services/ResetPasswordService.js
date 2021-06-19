"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
var AppError_1 = __importDefault(require("../../../errors/AppError"));
var ResetPasswordService = /** @class */ (function () {
    function ResetPasswordService(repository) {
        this.repository = repository;
    }
    ResetPasswordService.prototype.execute = function (_a) {
        var tokenEncoded = _a.tokenEncoded, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var token, user, currentDate, expiresDate, _b, tokenId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.repository.findByEncoded(tokenEncoded)];
                    case 1:
                        token = _c.sent();
                        user = token === null || token === void 0 ? void 0 : token.user;
                        if (!token || !user) {
                            throw new AppError_1.default("Token invalid!");
                        }
                        currentDate = new Date();
                        expiresDate = token.expiresAt;
                        if (!expiresDate || currentDate.getTime() > expiresDate.getTime()) {
                            throw new AppError_1.default("Token expired!");
                        }
                        // atualiza o password
                        _b = user;
                        return [4 /*yield*/, bcrypt_1.hash(password, 8)];
                    case 2:
                        // atualiza o password
                        _b.password = _c.sent();
                        if (!user.isConfirmed) {
                            user.isConfirmed = true;
                        }
                        tokenId = token.id;
                        // salva a senha do usuário
                        return [4 /*yield*/, this.repository.save(token)];
                    case 3:
                        // salva a senha do usuário
                        _c.sent();
                        // remove o token antigo
                        return [4 /*yield*/, this.repository.deleteById(tokenId)];
                    case 4:
                        // remove o token antigo
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ResetPasswordService;
}());
exports.default = ResetPasswordService;
