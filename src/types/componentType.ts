export type TComponent = {
    id: string,
    name: string,
    description: string,
    partNumber: string,
    partNumberReman: string,
    isReman: Boolean
}

export type TComponentCreation = Omit<TComponent, "id">
export type TComponentUpdate = Partial<TComponent>