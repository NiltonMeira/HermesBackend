export type TFila = {
    name: string,
    productId: string,
    producName: string,
    description	: string
}

export type TFilaCreation = Omit<TFila, "id">
export type TFilaUpdate = Partial<TFila>

