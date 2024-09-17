export type TCore = {
    id: string,
    name: string,
    familyId: string,
    description: string
}

export type TCoreCreation = Omit<TCore, "id">
export type TCoreUpdate = Partial<TCore>