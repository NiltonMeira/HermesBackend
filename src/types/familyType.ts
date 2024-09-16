export type TFamily = {
    id: string,
    name: string,
    productid: string,
    description: string
}

export type TFamilyCreation = Omit<TFamily, "id">
export type TFamilyUpdate = Partial<TFamily>