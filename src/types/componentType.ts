export type TComponent = {
    id: string,
    name: String,
    description: String,
    partNumber: String,
    partNumberReman: String,
    isReman: Boolean
}

export type TComponentCreation = Omit<TComponent, "id">
export type TComponentUpdate = Partial<TComponent>