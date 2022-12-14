import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { stores, storesDocument } from 'src/schemas/stores.schema';

@Injectable()
export class storesRepo {
    constructor(
        @InjectModel(stores.name)
        private readonly storesModel: Model<storesDocument>) {}

    async create(data): Promise<stores> {
        return new this.storesModel(data).save();
    }

    async findAll(): Promise<stores[]> {
        return this.storesModel.find({})
            .exec();
    }

    async update(storesId, data): Promise<stores> {
        const filter = { _id: storesId };
        return this.storesModel.findOneAndUpdate(filter, data);
    }

    async delete(storesId): Promise<stores> {
        const filter = { _id: storesId };
        return this.storesModel.findByIdAndDelete(storesId);
    }
}