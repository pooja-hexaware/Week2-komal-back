import { Injectable } from '@nestjs/common';
import { storesRepo } from '../repository/stores.repo';
import { stores } from '../schemas/stores.schema';

@Injectable()
export class storesService {
    constructor(
        private readonly storesRepo: storesRepo
    ) { }

    async findAll(): Promise<stores[]> {
        return this.storesRepo.findAll();
    }

    async create(data): Promise<stores> {
        data.createddate = new Date();
        return this.storesRepo.create(data);
    }

    async update(storesId, data): Promise<stores> {
        return this.storesRepo.update(storesId, data);
    }

    async delete(storesId): Promise<stores> {
        return this.storesRepo.delete(storesId);
    }
}