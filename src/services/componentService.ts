import { Component } from "../models/componentModel"
import { TComponentCreation } from "../types/componentType"

export const creationComponentService = async (payload: TComponentCreation) => {
    const newComponent = new Component(payload)
    return await newComponent.save()
}

export const getComponentByIdService = async (id: string) => {
    const component = await Component.findById(id)
    return component
}

export const getAllComponents = async () => {
    return await Component.find()
}

export const getComponentByName = async (name: string) => {
    const components = await Component.find(


    )
}  