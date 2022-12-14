import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { storesController } from '../controllers/stores.controller';
import { storesService } from '../services/stores.service';
import { storesRepo } from '../repository/stores.repo';
import { stores, storesSchema } from '../schemas/stores.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: stores.name, schema: storesSchema }])
    ],
    controllers: [storesController],
    providers: [storesService, storesRepo],
    exports: [storesService, storesRepo]
  })
  export class storesModule { }