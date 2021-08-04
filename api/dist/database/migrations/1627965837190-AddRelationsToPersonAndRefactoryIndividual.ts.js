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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRelationsToPersonAndRefactoryIndividual1627965837190 = void 0;
var AddRelationsToPersonAndRefactoryIndividual1627965837190 = (function () {
    function AddRelationsToPersonAndRefactoryIndividual1627965837190() {
        this.name = "AddRelationsToPersonAndRefactoryIndividual1627965837190";
    }
    AddRelationsToPersonAndRefactoryIndividual1627965837190.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("CREATE TABLE \"temporary_user\" (\"user_id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"document\" varchar, \"email\" varchar NOT NULL, \"cellphone\" varchar, \"password\" varchar NOT NULL, \"is_admin\" boolean NOT NULL DEFAULT (0), \"is_valid\" boolean NOT NULL DEFAULT (1), \"is_confirmed\" boolean NOT NULL DEFAULT (0), \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"updated_at\" datetime NOT NULL DEFAULT (datetime('now')), \"validated_at\" datetime, \"confirmed_at\" datetime, CONSTRAINT \"UQ_e12875dfb3b1d92d7d7c5377e22\" UNIQUE (\"email\"))")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_user\"(\"user_id\", \"name\", \"document\", \"email\", \"cellphone\", \"password\", \"is_admin\", \"is_valid\", \"is_confirmed\", \"created_at\", \"updated_at\", \"validated_at\", \"confirmed_at\") SELECT \"user_id\", \"name\", \"document\", \"email\", \"cellphone\", \"password\", \"is_admin\", \"is_valid\", \"is_confirmed\", \"created_at\", \"updated_at\", \"validated_at\", \"confirmed_at\" FROM \"user\"")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"user\"")];
                    case 3:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_user\" RENAME TO \"user\"")];
                    case 4:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_individual\" (\"person_individual_id\" varchar PRIMARY KEY NOT NULL, \"birthday\" datetime NOT NULL, \"gender\" varchar CHECK( gender IN ('M','F','O') ) NOT NULL, \"ethnicity\" varchar CHECK( ethnicity IN ('AFRODESCENDENTE','BRANCO','ASI\u00C1TICO','AMER\u00CDNDIO','MULATO','MULTIRRACIAL/PARDO','N\u00C3O DECLARADA') ) NOT NULL DEFAULT ('N\u00C3O DECLARADA'), \"father_name\" varchar, \"mother_name\" varchar, \"civil_status\" varchar NOT NULL, CONSTRAINT \"FK_6ffe10839f581769aa801882859\" FOREIGN KEY (\"person_individual_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 5:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_individual\"(\"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\") SELECT \"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\" FROM \"person_individual\"")];
                    case 6:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_individual\"")];
                    case 7:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_individual\" RENAME TO \"person_individual\"")];
                    case 8:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person\" (\"person_id\" varchar PRIMARY KEY NOT NULL, \"type\" varchar NOT NULL, \"cellphone\" varchar, \"telephone\" varchar, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime, CONSTRAINT \"FK_403c951c5e9b776c16385a8940f\" FOREIGN KEY (\"person_id\") REFERENCES \"user\" (\"user_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 9:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person\"(\"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\") SELECT \"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\" FROM \"person\"")];
                    case 10:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person\"")];
                    case 11:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person\" RENAME TO \"person\"")];
                    case 12:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_company\" (\"person_company_id\" varchar PRIMARY KEY NOT NULL, \"fantasy_name\" varchar NOT NULL, \"open_date\" date NOT NULL, \"end_date\" date, \"responsible_name\" varchar NOT NULL, CONSTRAINT \"FK_7da75ef700b766ecea3b1a7f0ca\" FOREIGN KEY (\"person_company_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 13:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_company\"(\"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\") SELECT \"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\" FROM \"person_company\"")];
                    case 14:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_company\"")];
                    case 15:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_company\" RENAME TO \"person_company\"")];
                    case 16:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_user\" (\"user_id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"document\" varchar, \"email\" varchar NOT NULL, \"cellphone\" varchar, \"password\" varchar NOT NULL, \"is_admin\" boolean NOT NULL DEFAULT (0), \"is_valid\" boolean NOT NULL DEFAULT (1), \"is_confirmed\" boolean NOT NULL DEFAULT (0), \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"updated_at\" datetime NOT NULL DEFAULT (datetime('now')), \"validated_at\" datetime, \"confirmed_at\" datetime, CONSTRAINT \"UQ_e12875dfb3b1d92d7d7c5377e22\" UNIQUE (\"email\"))")];
                    case 17:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_user\"(\"user_id\", \"name\", \"document\", \"email\", \"cellphone\", \"password\", \"is_admin\", \"is_valid\", \"is_confirmed\", \"created_at\", \"updated_at\", \"validated_at\", \"confirmed_at\") SELECT \"user_id\", \"name\", \"document\", \"email\", \"cellphone\", \"password\", \"is_admin\", \"is_valid\", \"is_confirmed\", \"created_at\", \"updated_at\", \"validated_at\", \"confirmed_at\" FROM \"user\"")];
                    case 18:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"user\"")];
                    case 19:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_user\" RENAME TO \"user\"")];
                    case 20:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_individual\" (\"person_individual_id\" varchar PRIMARY KEY NOT NULL, \"birthday\" datetime NOT NULL, \"gender\" varchar CHECK( gender IN ('M','F','O') ) NOT NULL, \"ethnicity\" varchar CHECK( ethnicity IN ('AFRODESCENDENTE','BRANCO','ASI\u00C1TICO','AMER\u00CDNDIO','MULATO','MULTIRRACIAL/PARDO','N\u00C3O DECLARADA') ) NOT NULL DEFAULT ('N\u00C3O DECLARADA'), \"father_name\" varchar, \"mother_name\" varchar, \"civil_status\" varchar NOT NULL)")];
                    case 21:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_individual\"(\"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\") SELECT \"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\" FROM \"person_individual\"")];
                    case 22:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_individual\"")];
                    case 23:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_individual\" RENAME TO \"person_individual\"")];
                    case 24:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_individual\" (\"person_individual_id\" varchar PRIMARY KEY NOT NULL, \"birthday\" datetime NOT NULL, \"gender\" varchar CHECK( gender IN ('M','F','O') ) NOT NULL, \"ethnicity\" varchar CHECK( ethnicity IN ('AFRODESCENDENTE','BRANCO','ASI\u00C1TICO','AMER\u00CDNDIO','MULATO','MULTIRRACIAL/PARDO','N\u00C3O DECLARADA') ) NOT NULL DEFAULT ('N\u00C3O DECLARADA'), \"father_name\" varchar, \"mother_name\" varchar, \"civil_status\" varchar NOT NULL, CONSTRAINT \"UQ_75fe79bf9be8eda468e5c7f8530\" UNIQUE (\"person_individual_id\"))")];
                    case 25:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_individual\"(\"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\") SELECT \"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\" FROM \"person_individual\"")];
                    case 26:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_individual\"")];
                    case 27:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_individual\" RENAME TO \"person_individual\"")];
                    case 28:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person\" (\"person_id\" varchar PRIMARY KEY NOT NULL, \"type\" varchar NOT NULL, \"cellphone\" varchar, \"telephone\" varchar, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime)")];
                    case 29:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person\"(\"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\") SELECT \"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\" FROM \"person\"")];
                    case 30:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person\"")];
                    case 31:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person\" RENAME TO \"person\"")];
                    case 32:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_document\" (\"person_document_id\" varchar PRIMARY KEY NOT NULL, \"person_id\" varchar NOT NULL, \"document_type_id\" varchar, \"document_number\" varchar NOT NULL, \"dispatch_date\" date NOT NULL, \"issuing_agency\" varchar NOT NULL, \"person_name\" varchar NOT NULL, \"is_main\" boolean NOT NULL DEFAULT (0), \"createdAtCreated_at\" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT \"UQ_06d08640b21137b4a4ac77fa9b1\" UNIQUE (\"document_type_id\"))")];
                    case 33:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_document\"(\"person_document_id\", \"person_id\", \"document_type_id\", \"document_number\", \"dispatch_date\", \"issuing_agency\", \"person_name\", \"is_main\", \"createdAtCreated_at\") SELECT \"person_document_id\", \"person_id\", \"document_type_id\", \"document_number\", \"dispatch_date\", \"issuing_agency\", \"person_name\", \"is_main\", \"createdAtCreated_at\" FROM \"person_document\"")];
                    case 34:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_document\"")];
                    case 35:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_document\" RENAME TO \"person_document\"")];
                    case 36:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_company\" (\"person_company_id\" varchar PRIMARY KEY NOT NULL, \"fantasy_name\" varchar NOT NULL, \"open_date\" date NOT NULL, \"end_date\" date, \"responsible_name\" varchar NOT NULL)")];
                    case 37:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_company\"(\"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\") SELECT \"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\" FROM \"person_company\"")];
                    case 38:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_company\"")];
                    case 39:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_company\" RENAME TO \"person_company\"")];
                    case 40:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_data_sent\" (\"person_data_sent_id\" varchar PRIMARY KEY NOT NULL, \"field_name\" varchar NOT NULL, \"old_value\" text NOT NULL, \"new_value\" text NOT NULL, \"user_message\" text NOT NULL, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime NOT NULL, \"person_id\" varchar, \"analyst_id\" varchar, \"updated_at\" datetime NOT NULL DEFAULT (datetime('now')), \"created_at\" datetime NOT NULL DEFAULT (datetime('now')))")];
                    case 41:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_data_sent\"(\"person_data_sent_id\", \"field_name\", \"old_value\", \"new_value\", \"user_message\", \"is_valid\", \"valid_at\", \"person_id\", \"analyst_id\", \"updated_at\", \"created_at\") SELECT \"person_data_sent_id\", \"field_name\", \"old_value\", \"new_value\", \"user_message\", \"is_valid\", \"valid_at\", \"person_id\", \"analyst_id\", \"updated_at\", \"created_at\" FROM \"person_data_sent\"")];
                    case 42:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_data_sent\"")];
                    case 43:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_data_sent\" RENAME TO \"person_data_sent\"")];
                    case 44:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person\" (\"person_id\" varchar PRIMARY KEY NOT NULL, \"type\" varchar NOT NULL, \"cellphone\" varchar, \"telephone\" varchar, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime, CONSTRAINT \"UQ_ab7fa85d3ddc83703498fd7cb68\" UNIQUE (\"person_id\"))")];
                    case 45:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person\"(\"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\") SELECT \"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\" FROM \"person\"")];
                    case 46:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person\"")];
                    case 47:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person\" RENAME TO \"person\"")];
                    case 48:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_company\" (\"person_company_id\" varchar PRIMARY KEY NOT NULL, \"fantasy_name\" varchar NOT NULL, \"open_date\" date NOT NULL, \"end_date\" date, \"responsible_name\" varchar NOT NULL, CONSTRAINT \"UQ_9a3dfdefcdcee927b268f3e9f8b\" UNIQUE (\"person_company_id\"))")];
                    case 49:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_company\"(\"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\") SELECT \"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\" FROM \"person_company\"")];
                    case 50:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_company\"")];
                    case 51:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_company\" RENAME TO \"person_company\"")];
                    case 52:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_document\" (\"person_document_id\" varchar PRIMARY KEY NOT NULL, \"person_id\" varchar NOT NULL, \"document_type_id\" varchar, \"document_number\" varchar NOT NULL, \"dispatch_date\" date NOT NULL, \"issuing_agency\" varchar NOT NULL, \"person_name\" varchar NOT NULL, \"is_main\" boolean NOT NULL DEFAULT (0), \"createdAtCreated_at\" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT \"UQ_06d08640b21137b4a4ac77fa9b1\" UNIQUE (\"document_type_id\"), CONSTRAINT \"FK_3d2eefc8668f687831146947b31\" FOREIGN KEY (\"person_id\") REFERENCES \"person\" (\"person_id\") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT \"FK_06d08640b21137b4a4ac77fa9b1\" FOREIGN KEY (\"document_type_id\") REFERENCES \"document_type\" (\"document_type_id\") ON DELETE NO ACTION ON UPDATE NO ACTION)")];
                    case 53:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_document\"(\"person_document_id\", \"person_id\", \"document_type_id\", \"document_number\", \"dispatch_date\", \"issuing_agency\", \"person_name\", \"is_main\", \"createdAtCreated_at\") SELECT \"person_document_id\", \"person_id\", \"document_type_id\", \"document_number\", \"dispatch_date\", \"issuing_agency\", \"person_name\", \"is_main\", \"createdAtCreated_at\" FROM \"person_document\"")];
                    case 54:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_document\"")];
                    case 55:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_document\" RENAME TO \"person_document\"")];
                    case 56:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_individual\" (\"person_individual_id\" varchar PRIMARY KEY NOT NULL, \"birthday\" datetime NOT NULL, \"gender\" varchar CHECK( gender IN ('M','F','O') ) NOT NULL, \"ethnicity\" varchar CHECK( ethnicity IN ('AFRODESCENDENTE','BRANCO','ASI\u00C1TICO','AMER\u00CDNDIO','MULATO','MULTIRRACIAL/PARDO','N\u00C3O DECLARADA') ) NOT NULL DEFAULT ('N\u00C3O DECLARADA'), \"father_name\" varchar, \"mother_name\" varchar, \"civil_status\" varchar NOT NULL, CONSTRAINT \"UQ_75fe79bf9be8eda468e5c7f8530\" UNIQUE (\"person_individual_id\"), CONSTRAINT \"FK_6ffe10839f581769aa801882859\" FOREIGN KEY (\"person_individual_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 57:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_individual\"(\"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\") SELECT \"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\" FROM \"person_individual\"")];
                    case 58:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_individual\"")];
                    case 59:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_individual\" RENAME TO \"person_individual\"")];
                    case 60:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person\" (\"person_id\" varchar PRIMARY KEY NOT NULL, \"type\" varchar NOT NULL, \"cellphone\" varchar, \"telephone\" varchar, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime, CONSTRAINT \"UQ_ab7fa85d3ddc83703498fd7cb68\" UNIQUE (\"person_id\"), CONSTRAINT \"FK_403c951c5e9b776c16385a8940f\" FOREIGN KEY (\"person_id\") REFERENCES \"user\" (\"user_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 61:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person\"(\"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\") SELECT \"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\" FROM \"person\"")];
                    case 62:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person\"")];
                    case 63:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person\" RENAME TO \"person\"")];
                    case 64:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_company\" (\"person_company_id\" varchar PRIMARY KEY NOT NULL, \"fantasy_name\" varchar NOT NULL, \"open_date\" date NOT NULL, \"end_date\" date, \"responsible_name\" varchar NOT NULL, CONSTRAINT \"UQ_9a3dfdefcdcee927b268f3e9f8b\" UNIQUE (\"person_company_id\"), CONSTRAINT \"FK_7da75ef700b766ecea3b1a7f0ca\" FOREIGN KEY (\"person_company_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 65:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_company\"(\"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\") SELECT \"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\" FROM \"person_company\"")];
                    case 66:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_company\"")];
                    case 67:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_company\" RENAME TO \"person_company\"")];
                    case 68:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"temporary_person_data_sent\" (\"person_data_sent_id\" varchar PRIMARY KEY NOT NULL, \"field_name\" varchar NOT NULL, \"old_value\" text NOT NULL, \"new_value\" text NOT NULL, \"user_message\" text NOT NULL, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime NOT NULL, \"person_id\" varchar, \"analyst_id\" varchar, \"updated_at\" datetime NOT NULL DEFAULT (datetime('now')), \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT \"FK_110699897ddf3d01e9ae708e8e9\" FOREIGN KEY (\"person_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT \"FK_cffb270571916505dcf84d8f250\" FOREIGN KEY (\"analyst_id\") REFERENCES \"user\" (\"user_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 69:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"temporary_person_data_sent\"(\"person_data_sent_id\", \"field_name\", \"old_value\", \"new_value\", \"user_message\", \"is_valid\", \"valid_at\", \"person_id\", \"analyst_id\", \"updated_at\", \"created_at\") SELECT \"person_data_sent_id\", \"field_name\", \"old_value\", \"new_value\", \"user_message\", \"is_valid\", \"valid_at\", \"person_id\", \"analyst_id\", \"updated_at\", \"created_at\" FROM \"person_data_sent\"")];
                    case 70:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"person_data_sent\"")];
                    case 71:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"temporary_person_data_sent\" RENAME TO \"person_data_sent\"")];
                    case 72:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    AddRelationsToPersonAndRefactoryIndividual1627965837190.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("ALTER TABLE \"person_data_sent\" RENAME TO \"temporary_person_data_sent\"")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_data_sent\" (\"person_data_sent_id\" varchar PRIMARY KEY NOT NULL, \"field_name\" varchar NOT NULL, \"old_value\" text NOT NULL, \"new_value\" text NOT NULL, \"user_message\" text NOT NULL, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime NOT NULL, \"person_id\" varchar, \"analyst_id\" varchar, \"updated_at\" datetime NOT NULL DEFAULT (datetime('now')), \"created_at\" datetime NOT NULL DEFAULT (datetime('now')))")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_data_sent\"(\"person_data_sent_id\", \"field_name\", \"old_value\", \"new_value\", \"user_message\", \"is_valid\", \"valid_at\", \"person_id\", \"analyst_id\", \"updated_at\", \"created_at\") SELECT \"person_data_sent_id\", \"field_name\", \"old_value\", \"new_value\", \"user_message\", \"is_valid\", \"valid_at\", \"person_id\", \"analyst_id\", \"updated_at\", \"created_at\" FROM \"temporary_person_data_sent\"")];
                    case 3:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_data_sent\"")];
                    case 4:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_company\" RENAME TO \"temporary_person_company\"")];
                    case 5:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_company\" (\"person_company_id\" varchar PRIMARY KEY NOT NULL, \"fantasy_name\" varchar NOT NULL, \"open_date\" date NOT NULL, \"end_date\" date, \"responsible_name\" varchar NOT NULL, CONSTRAINT \"UQ_9a3dfdefcdcee927b268f3e9f8b\" UNIQUE (\"person_company_id\"))")];
                    case 6:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_company\"(\"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\") SELECT \"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\" FROM \"temporary_person_company\"")];
                    case 7:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_company\"")];
                    case 8:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person\" RENAME TO \"temporary_person\"")];
                    case 9:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person\" (\"person_id\" varchar PRIMARY KEY NOT NULL, \"type\" varchar NOT NULL, \"cellphone\" varchar, \"telephone\" varchar, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime, CONSTRAINT \"UQ_ab7fa85d3ddc83703498fd7cb68\" UNIQUE (\"person_id\"))")];
                    case 10:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person\"(\"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\") SELECT \"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\" FROM \"temporary_person\"")];
                    case 11:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person\"")];
                    case 12:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_individual\" RENAME TO \"temporary_person_individual\"")];
                    case 13:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_individual\" (\"person_individual_id\" varchar PRIMARY KEY NOT NULL, \"birthday\" datetime NOT NULL, \"gender\" varchar CHECK( gender IN ('M','F','O') ) NOT NULL, \"ethnicity\" varchar CHECK( ethnicity IN ('AFRODESCENDENTE','BRANCO','ASI\u00C1TICO','AMER\u00CDNDIO','MULATO','MULTIRRACIAL/PARDO','N\u00C3O DECLARADA') ) NOT NULL DEFAULT ('N\u00C3O DECLARADA'), \"father_name\" varchar, \"mother_name\" varchar, \"civil_status\" varchar NOT NULL, CONSTRAINT \"UQ_75fe79bf9be8eda468e5c7f8530\" UNIQUE (\"person_individual_id\"))")];
                    case 14:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_individual\"(\"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\") SELECT \"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\" FROM \"temporary_person_individual\"")];
                    case 15:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_individual\"")];
                    case 16:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_document\" RENAME TO \"temporary_person_document\"")];
                    case 17:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_document\" (\"person_document_id\" varchar PRIMARY KEY NOT NULL, \"person_id\" varchar NOT NULL, \"document_type_id\" varchar, \"document_number\" varchar NOT NULL, \"dispatch_date\" date NOT NULL, \"issuing_agency\" varchar NOT NULL, \"person_name\" varchar NOT NULL, \"is_main\" boolean NOT NULL DEFAULT (0), \"createdAtCreated_at\" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT \"UQ_06d08640b21137b4a4ac77fa9b1\" UNIQUE (\"document_type_id\"))")];
                    case 18:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_document\"(\"person_document_id\", \"person_id\", \"document_type_id\", \"document_number\", \"dispatch_date\", \"issuing_agency\", \"person_name\", \"is_main\", \"createdAtCreated_at\") SELECT \"person_document_id\", \"person_id\", \"document_type_id\", \"document_number\", \"dispatch_date\", \"issuing_agency\", \"person_name\", \"is_main\", \"createdAtCreated_at\" FROM \"temporary_person_document\"")];
                    case 19:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_document\"")];
                    case 20:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_company\" RENAME TO \"temporary_person_company\"")];
                    case 21:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_company\" (\"person_company_id\" varchar PRIMARY KEY NOT NULL, \"fantasy_name\" varchar NOT NULL, \"open_date\" date NOT NULL, \"end_date\" date, \"responsible_name\" varchar NOT NULL)")];
                    case 22:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_company\"(\"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\") SELECT \"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\" FROM \"temporary_person_company\"")];
                    case 23:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_company\"")];
                    case 24:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person\" RENAME TO \"temporary_person\"")];
                    case 25:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person\" (\"person_id\" varchar PRIMARY KEY NOT NULL, \"type\" varchar NOT NULL, \"cellphone\" varchar, \"telephone\" varchar, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime)")];
                    case 26:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person\"(\"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\") SELECT \"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\" FROM \"temporary_person\"")];
                    case 27:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person\"")];
                    case 28:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_data_sent\" RENAME TO \"temporary_person_data_sent\"")];
                    case 29:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_data_sent\" (\"person_data_sent_id\" varchar PRIMARY KEY NOT NULL, \"field_name\" varchar NOT NULL, \"old_value\" text NOT NULL, \"new_value\" text NOT NULL, \"user_message\" text NOT NULL, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime NOT NULL, \"person_id\" varchar, \"analyst_id\" varchar, \"updated_at\" datetime NOT NULL DEFAULT (datetime('now')), \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT \"FK_110699897ddf3d01e9ae708e8e9\" FOREIGN KEY (\"person_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 30:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_data_sent\"(\"person_data_sent_id\", \"field_name\", \"old_value\", \"new_value\", \"user_message\", \"is_valid\", \"valid_at\", \"person_id\", \"analyst_id\", \"updated_at\", \"created_at\") SELECT \"person_data_sent_id\", \"field_name\", \"old_value\", \"new_value\", \"user_message\", \"is_valid\", \"valid_at\", \"person_id\", \"analyst_id\", \"updated_at\", \"created_at\" FROM \"temporary_person_data_sent\"")];
                    case 31:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_data_sent\"")];
                    case 32:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_company\" RENAME TO \"temporary_person_company\"")];
                    case 33:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_company\" (\"person_company_id\" varchar PRIMARY KEY NOT NULL, \"fantasy_name\" varchar NOT NULL, \"open_date\" date NOT NULL, \"end_date\" date, \"responsible_name\" varchar NOT NULL, CONSTRAINT \"FK_7da75ef700b766ecea3b1a7f0ca\" FOREIGN KEY (\"person_company_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 34:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_company\"(\"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\") SELECT \"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\" FROM \"temporary_person_company\"")];
                    case 35:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_company\"")];
                    case 36:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_document\" RENAME TO \"temporary_person_document\"")];
                    case 37:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_document\" (\"person_document_id\" varchar PRIMARY KEY NOT NULL, \"person_id\" varchar NOT NULL, \"document_type_id\" varchar, \"document_number\" varchar NOT NULL, \"dispatch_date\" date NOT NULL, \"issuing_agency\" varchar NOT NULL, \"person_name\" varchar NOT NULL, \"is_main\" boolean NOT NULL DEFAULT (0), \"createdAtCreated_at\" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT \"UQ_06d08640b21137b4a4ac77fa9b1\" UNIQUE (\"document_type_id\"), CONSTRAINT \"FK_3d2eefc8668f687831146947b31\" FOREIGN KEY (\"person_id\") REFERENCES \"person\" (\"person_id\") ON DELETE NO ACTION ON UPDATE NO ACTION)")];
                    case 38:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_document\"(\"person_document_id\", \"person_id\", \"document_type_id\", \"document_number\", \"dispatch_date\", \"issuing_agency\", \"person_name\", \"is_main\", \"createdAtCreated_at\") SELECT \"person_document_id\", \"person_id\", \"document_type_id\", \"document_number\", \"dispatch_date\", \"issuing_agency\", \"person_name\", \"is_main\", \"createdAtCreated_at\" FROM \"temporary_person_document\"")];
                    case 39:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_document\"")];
                    case 40:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person\" RENAME TO \"temporary_person\"")];
                    case 41:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person\" (\"person_id\" varchar PRIMARY KEY NOT NULL, \"type\" varchar NOT NULL, \"cellphone\" varchar, \"telephone\" varchar, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime, CONSTRAINT \"FK_403c951c5e9b776c16385a8940f\" FOREIGN KEY (\"person_id\") REFERENCES \"user\" (\"user_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 42:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person\"(\"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\") SELECT \"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\" FROM \"temporary_person\"")];
                    case 43:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person\"")];
                    case 44:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_individual\" RENAME TO \"temporary_person_individual\"")];
                    case 45:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_individual\" (\"person_individual_id\" varchar PRIMARY KEY NOT NULL, \"birthday\" datetime NOT NULL, \"gender\" varchar CHECK( gender IN ('M','F','O') ) NOT NULL, \"ethnicity\" varchar CHECK( ethnicity IN ('AFRODESCENDENTE','BRANCO','ASI\u00C1TICO','AMER\u00CDNDIO','MULATO','MULTIRRACIAL/PARDO','N\u00C3O DECLARADA') ) NOT NULL DEFAULT ('N\u00C3O DECLARADA'), \"father_name\" varchar, \"mother_name\" varchar, \"civil_status\" varchar NOT NULL)")];
                    case 46:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_individual\"(\"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\") SELECT \"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\" FROM \"temporary_person_individual\"")];
                    case 47:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_individual\"")];
                    case 48:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_individual\" RENAME TO \"temporary_person_individual\"")];
                    case 49:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_individual\" (\"person_individual_id\" varchar PRIMARY KEY NOT NULL, \"birthday\" datetime NOT NULL, \"gender\" varchar CHECK( gender IN ('M','F','O') ) NOT NULL, \"ethnicity\" varchar CHECK( ethnicity IN ('AFRODESCENDENTE','BRANCO','ASI\u00C1TICO','AMER\u00CDNDIO','MULATO','MULTIRRACIAL/PARDO','N\u00C3O DECLARADA') ) NOT NULL DEFAULT ('N\u00C3O DECLARADA'), \"father_name\" varchar, \"mother_name\" varchar, \"civil_status\" varchar NOT NULL, CONSTRAINT \"FK_6ffe10839f581769aa801882859\" FOREIGN KEY (\"person_individual_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 50:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_individual\"(\"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\") SELECT \"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\" FROM \"temporary_person_individual\"")];
                    case 51:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_individual\"")];
                    case 52:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"user\" RENAME TO \"temporary_user\"")];
                    case 53:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"user\" (\"user_id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"document\" varchar, \"email\" varchar NOT NULL, \"cellphone\" varchar, \"password\" varchar NOT NULL, \"is_admin\" boolean NOT NULL DEFAULT (0), \"is_valid\" boolean NOT NULL DEFAULT (1), \"is_confirmed\" boolean NOT NULL DEFAULT (0), \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"updated_at\" datetime NOT NULL DEFAULT (datetime('now')), \"validated_at\" datetime, \"confirmed_at\" datetime, CONSTRAINT \"UQ_e12875dfb3b1d92d7d7c5377e22\" UNIQUE (\"email\"))")];
                    case 54:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"user\"(\"user_id\", \"name\", \"document\", \"email\", \"cellphone\", \"password\", \"is_admin\", \"is_valid\", \"is_confirmed\", \"created_at\", \"updated_at\", \"validated_at\", \"confirmed_at\") SELECT \"user_id\", \"name\", \"document\", \"email\", \"cellphone\", \"password\", \"is_admin\", \"is_valid\", \"is_confirmed\", \"created_at\", \"updated_at\", \"validated_at\", \"confirmed_at\" FROM \"temporary_user\"")];
                    case 55:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_user\"")];
                    case 56:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_company\" RENAME TO \"temporary_person_company\"")];
                    case 57:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_company\" (\"person_company_id\" varchar PRIMARY KEY NOT NULL, \"fantasy_name\" varchar NOT NULL, \"open_date\" date NOT NULL, \"end_date\" date, \"responsible_name\" varchar NOT NULL, CONSTRAINT \"FK_7da75ef700b766ecea3b1a7f0ca\" FOREIGN KEY (\"person_company_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 58:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_company\"(\"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\") SELECT \"person_company_id\", \"fantasy_name\", \"open_date\", \"end_date\", \"responsible_name\" FROM \"temporary_person_company\"")];
                    case 59:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_company\"")];
                    case 60:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person\" RENAME TO \"temporary_person\"")];
                    case 61:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person\" (\"person_id\" varchar PRIMARY KEY NOT NULL, \"type\" varchar NOT NULL, \"cellphone\" varchar, \"telephone\" varchar, \"is_valid\" boolean NOT NULL DEFAULT (0), \"valid_at\" datetime, CONSTRAINT \"FK_403c951c5e9b776c16385a8940f\" FOREIGN KEY (\"person_id\") REFERENCES \"user\" (\"user_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 62:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person\"(\"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\") SELECT \"person_id\", \"type\", \"cellphone\", \"telephone\", \"is_valid\", \"valid_at\" FROM \"temporary_person\"")];
                    case 63:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person\"")];
                    case 64:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"person_individual\" RENAME TO \"temporary_person_individual\"")];
                    case 65:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"person_individual\" (\"person_individual_id\" varchar PRIMARY KEY NOT NULL, \"birthday\" datetime NOT NULL, \"gender\" varchar CHECK( gender IN ('M','F','O') ) NOT NULL, \"ethnicity\" varchar CHECK( ethnicity IN ('AFRODESCENDENTE','BRANCO','ASI\u00C1TICO','AMER\u00CDNDIO','MULATO','MULTIRRACIAL/PARDO','N\u00C3O DECLARADA') ) NOT NULL DEFAULT ('N\u00C3O DECLARADA'), \"father_name\" varchar, \"mother_name\" varchar, \"civil_status\" varchar NOT NULL, CONSTRAINT \"FK_6ffe10839f581769aa801882859\" FOREIGN KEY (\"person_individual_id\") REFERENCES \"person\" (\"person_id\") ON DELETE CASCADE ON UPDATE CASCADE)")];
                    case 66:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"person_individual\"(\"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\") SELECT \"person_individual_id\", \"birthday\", \"gender\", \"ethnicity\", \"father_name\", \"mother_name\", \"civil_status\" FROM \"temporary_person_individual\"")];
                    case 67:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_person_individual\"")];
                    case 68:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"user\" RENAME TO \"temporary_user\"")];
                    case 69:
                        _a.sent();
                        return [4, queryRunner.query("CREATE TABLE \"user\" (\"user_id\" varchar PRIMARY KEY NOT NULL, \"name\" varchar NOT NULL, \"document\" varchar, \"email\" varchar NOT NULL, \"cellphone\" varchar, \"password\" varchar NOT NULL, \"is_admin\" boolean NOT NULL DEFAULT (0), \"is_valid\" boolean NOT NULL DEFAULT (1), \"is_confirmed\" boolean NOT NULL DEFAULT (0), \"created_at\" datetime NOT NULL DEFAULT (datetime('now')), \"updated_at\" datetime NOT NULL DEFAULT (datetime('now')), \"validated_at\" datetime, \"confirmed_at\" datetime, CONSTRAINT \"UQ_e12875dfb3b1d92d7d7c5377e22\" UNIQUE (\"email\"))")];
                    case 70:
                        _a.sent();
                        return [4, queryRunner.query("INSERT INTO \"user\"(\"user_id\", \"name\", \"document\", \"email\", \"cellphone\", \"password\", \"is_admin\", \"is_valid\", \"is_confirmed\", \"created_at\", \"updated_at\", \"validated_at\", \"confirmed_at\") SELECT \"user_id\", \"name\", \"document\", \"email\", \"cellphone\", \"password\", \"is_admin\", \"is_valid\", \"is_confirmed\", \"created_at\", \"updated_at\", \"validated_at\", \"confirmed_at\" FROM \"temporary_user\"")];
                    case 71:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"temporary_user\"")];
                    case 72:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return AddRelationsToPersonAndRefactoryIndividual1627965837190;
}());
exports.AddRelationsToPersonAndRefactoryIndividual1627965837190 = AddRelationsToPersonAndRefactoryIndividual1627965837190;