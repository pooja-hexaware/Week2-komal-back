import { Document } from 'mongoose';
export declare type MenuDocument = Menu & Document;
export declare class Menu {
    Name: string;
    Description: string;
    AvailableToppings: string[];
    AvailableStores: string[];
    price: number;
}
export declare const MenuSchema: import("mongoose").Schema<Document<Menu, any, any>, import("mongoose").Model<Document<Menu, any, any>, any, any>, undefined, {}>;
