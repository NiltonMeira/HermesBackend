export type TUser = {
    id: string,
    name: string,
    email: string,
    edv: string,
    password: string
}

export type tUserCreation = Omit<TUser, "id">
export type TUserUpdate = Partial<tUserCreation>