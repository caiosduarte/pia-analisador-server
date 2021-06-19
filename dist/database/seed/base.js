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
var index_1 = __importDefault(require("../index"));
function create() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, _a, _b, _c, _d, _e, _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0: return [4 /*yield*/, index_1.default()];
                case 1:
                    connection = _j.sent();
                    _b = (_a = connection).query;
                    _c = ["INSERT INTO user (id, name, document, cellphone, email, password, is_admin, is_confirmed) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?, ?);"];
                    _d = ["ba8e4a63-9a01-4bc9-aef9-1e0793bb2548",
                        "Admin",
                        "",
                        "",
                        "caiosduarte@yahoo.com.br"];
                    return [4 /*yield*/, bcrypt_1.hash("root", 8)];
                case 2: return [4 /*yield*/, _b.apply(_a, _c.concat([_d.concat([
                            _j.sent(),
                            true,
                            true
                        ])]))];
                case 3:
                    _j.sent();
                    _f = (_e = connection).query;
                    _g = ["INSERT INTO user (id, name, document, cellphone, email, password, is_admin, is_confirmed) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?, ?);"];
                    _h = ["ff9bf59a-70dc-4a80-a4b1-144fadfa8209",
                        "Caio Duarte",
                        "01351676636",
                        "31984227833",
                        "caiosduarte@gmail.com"];
                    return [4 /*yield*/, bcrypt_1.hash("password123", 8)];
                case 4: return [4 /*yield*/, _f.apply(_e, _g.concat([_h.concat([
                            _j.sent(),
                            false,
                            true
                        ])]))];
                case 5:
                    _j.sent();
                    return [4 /*yield*/, connection.query("INSERT INTO person (id, name, is_valid) " + "VALUES (?, ?, ?);", ["ff9bf59a-70dc-4a80-a4b1-144fadfa8209", "Caio Duarte", false])];
                case 6:
                    _j.sent();
                    return [4 /*yield*/, connection.close()];
                case 7:
                    _j.sent();
                    return [2 /*return*/];
            }
        });
    });
}
create().then(function () {
    return console.log("User Admin, user Caio Duarte and person Caio Duarte were created!");
});
