export type TRemanProduct = {
    id: string,
    name: string,
    coreId: string,
    description: string
}

export type TRemanProductCreation = Omit<TRemanProduct, "id">
export type TRemanProductUpdate = Partial<TRemanProduct>