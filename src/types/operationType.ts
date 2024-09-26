export type TOperation = {
    id: string,
    bodyId: string,
    queryId: string,
    partNumber: string,
    type: boolean,
    Date: Date,
    NPK: number,
    Quantity: number
}

export type TOperationCreation = Omit<TOperation, "id">
export type TOperationUpdate = Partial<TOperation> 