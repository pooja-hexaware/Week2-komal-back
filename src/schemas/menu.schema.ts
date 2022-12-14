import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;

@Schema()
export class Menu {
   
   @Prop()
   Name: string; 
   
   @Prop()
   Description: string; 
   
   @Prop()
   AvailableToppings: string[]; 
   
   @Prop()
   AvailableStores: string[]; 
   
   @Prop()
   price: number; 
   
}

export const MenuSchema = SchemaFactory.createForClass(Menu);