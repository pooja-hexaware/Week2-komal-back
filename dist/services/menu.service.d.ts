import { MenuRepo } from '../repository/menu.repo';
import { Menu } from '../schemas/menu.schema';
export declare class MenuService {
    private readonly menuRepo;
    constructor(menuRepo: MenuRepo);
    findAll(): Promise<Menu[]>;
    findOne(menuId: any): Promise<Menu[]>;
    create(data: any): Promise<Menu>;
    update(menuId: any, data: any): Promise<Menu>;
    delete(menuId: any): Promise<Menu>;
}
