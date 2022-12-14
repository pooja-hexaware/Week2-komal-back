"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesDto = void 0;
const openapi = require("@nestjs/swagger");
class storesDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { storename: { required: true, type: () => String }, storelocation: { required: true, type: () => String } };
    }
}
exports.storesDto = storesDto;
//# sourceMappingURL=stores-dto.dto.js.map