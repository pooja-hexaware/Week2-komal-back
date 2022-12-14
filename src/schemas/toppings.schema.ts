import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToppingsDocument = Toppings & Document;

@Schema()
export class Toppings {
   
   @Prop()
   toppingname: string; 
   
   @Prop()
   price: number;
   
   @Prop()
   image: string;
   
}

export const ToppingsSchema = SchemaFactory.createForClass(Toppings);