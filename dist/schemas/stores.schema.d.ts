import { Document } from 'mongoose';
export declare type storesDocument = stores & Document;
export declare class stores {
    storename: string;
    storelocation: string;
}
export declare const storesSchema: import("mongoose").Schema<Document<stores, any, any>, import("mongoose").Model<Document<stores, any, any>, any, any>, undefined, {}>;
