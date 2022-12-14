import { storesDto } from '../dto/stores-dto.dto';
import { storesService } from '../services/stores.service';
export declare class storesController {
    private readonly storesService;
    constructor(storesService: storesService);
    create(storesDto: storesDto): Promise<import("../schemas/stores.schema").stores>;
    findAll(): Promise<import("../schemas/stores.schema").stores[]>;
    update(id: string, storesDto: storesDto): Promise<import("../schemas/stores.schema").stores>;
    delete(id: string): Promise<import("../schemas/stores.schema").stores>;
}
