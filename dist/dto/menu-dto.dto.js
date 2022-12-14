"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDto = void 0;
const openapi = require("@nestjs/swagger");
class MenuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { Name: { required: true, type: () => String }, Description: { required: true, type: () => String }, AvailableToppings: { required: true, type: () => [String] }, AvailableStores: { required: true, type: () => [String] }, price: { required: true, type: () => Number } };
    }
}
exports.MenuDto = MenuDto;
//# sourceMappingURL=menu-dto.dto.js.map