export type TBody = {
    id: string,
    name: String,
    description: String,
    partNumber: String,
    partNumberReman: String,
    isReman: Boolean
}

export type TBodyCreation = Omit<TBody, "id">
export type TBodyUpdate = Partial<TBody>
