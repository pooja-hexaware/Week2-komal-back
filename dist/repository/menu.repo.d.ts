import { Model } from 'mongoose';
import { Menu, MenuDocument } from 'src/schemas/menu.schema';
export declare class MenuRepo {
    private readonly menuModel;
    constructor(menuModel: Model<MenuDocument>);
    create(data: any): Promise<Menu>;
    findAll(): Promise<Menu[]>;
    findOne(menuId: any): Promise<Menu[]>;
    update(menuId: any, data: any): Promise<Menu>;
    delete(menuId: any): Promise<Menu>;
}
