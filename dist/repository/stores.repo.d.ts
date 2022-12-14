import { Model } from 'mongoose';
import { stores, storesDocument } from 'src/schemas/stores.schema';
export declare class storesRepo {
    private readonly storesModel;
    constructor(storesModel: Model<storesDocument>);
    create(data: any): Promise<stores>;
    findAll(): Promise<stores[]>;
    update(storesId: any, data: any): Promise<stores>;
    delete(storesId: any): Promise<stores>;
}
