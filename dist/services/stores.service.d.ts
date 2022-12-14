import { storesRepo } from '../repository/stores.repo';
import { stores } from '../schemas/stores.schema';
export declare class storesService {
    private readonly storesRepo;
    constructor(storesRepo: storesRepo);
    findAll(): Promise<stores[]>;
    create(data: any): Promise<stores>;
    update(storesId: any, data: any): Promise<stores>;
    delete(storesId: any): Promise<stores>;
}
