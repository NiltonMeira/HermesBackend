import { tUserCreation, TUserUpdate } from './userTypes';
export type TProduct = {
    id: string,
    name: string,
    description: string
}

export type TProductCreation = Omit<TProduct, "id">
export type TProductUpdate = Partial<tUserCreation>