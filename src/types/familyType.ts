import {Schema} from "mongoose"

export type TFamily = {
    id: string,
    name: string,
    productid: Schema.Types.ObjectId,
    description: string
}

export type TFamilyCreation = Omit<TFamily, "id">
export type TFamilyUpdate = Partial<TFamily>