export type TBussinesModel = {
    id: string,
    name: string,
    costumer: string,
    description: String
}

export type TBussinesModelCreation = Omit<TBussinesModel, "id">
export type TBussinesModelUpdate = Partial<TBussinesModel>

