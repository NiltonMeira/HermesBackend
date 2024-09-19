export type TRemanProductCoponents = {
    id: string,
    remanProductId: string,
    componentId : string
}

export type TRemanProductComponentCreation = Omit<TRemanProductCoponents, "id">
export type TRemanProductComponentUpdate = Partial<TRemanProductCoponents>