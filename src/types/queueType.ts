export type TQueue = {
    id: string,
    bussinesModelId: string,
    position: Number,
    partNumber: string,
    npk: Number,
    capacityBatch: Number,
    batchQuantity: Number,
    BodiesQuantity: Number
}

export type TQueueCreation = Omit<TQueue, "id">
export type TQueueUpdate = Partial<TQueueCreation>