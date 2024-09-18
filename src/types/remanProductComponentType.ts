export type TRemanProductCoponents = {
    id: string,
    remanProductId: string,
    componentId : string
}

export type TRemanProductBodyCreation = Omit<TRemanProductCoponents, "id">
export type TRemanProductBodyUpdate = Partial<TRemanProductCoponents>