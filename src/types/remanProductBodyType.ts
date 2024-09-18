export type TRemanProductBody = {
    id: string,
    remanProductId: string,
    bodyId : string
}

export type TRemanProductBodyCreation = Omit<TRemanProductBody, "id">
export type TRemanProductBodyUpdate = Partial<TRemanProductBody>
