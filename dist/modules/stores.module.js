"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const stores_controller_1 = require("../controllers/stores.controller");
const stores_service_1 = require("../services/stores.service");
const stores_repo_1 = require("../repository/stores.repo");
const stores_schema_1 = require("../schemas/stores.schema");
let storesModule = class storesModule {
};
storesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: stores_schema_1.stores.name, schema: stores_schema_1.storesSchema }])
        ],
        controllers: [stores_controller_1.storesController],
        providers: [stores_service_1.storesService, stores_repo_1.storesRepo],
        exports: [stores_service_1.storesService, stores_repo_1.storesRepo]
    })
], storesModule);
exports.storesModule = storesModule;
//# sourceMappingURL=stores.module.js.map