import AppError from "../appError"
import { Component } from "../models/componentModel"
import { TComponentCreation, TComponentUpdate } from "../types/componentType"

export const creationComponentService = async (payload: TComponentCreation) => {
    const newComponent = new Component(payload)
    return await newComponent.save()
}

export const getComponentByIdService = async (id: string) => {
    const component = await Component.findById(id)

    if (!component) throw new AppError("Component not found", 404)
    return component
}

export const getAllComponents = async () => {
    const components = await Component.find()

    if (!components) throw new AppError("Component not found", 404)

    return components
}

export const getComponentByNameService = async (name: string) => {
    const components = await Component.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    if (!components) throw new AppError("Component not found", 404)

    return components
}

export const getComponentsByPartNumberService = async (partNUmber: string) => {
    const components = await Component.find(
        { "name": { "$regex": partNUmber, "$options": "i" } }

    )

    if (!components) throw new AppError("Component not found", 404)

    return components

}

export const deleteComponentService = async (id: string) => {
    const component = Component.findById(id)

    if (!component) throw new AppError("Component not found", 404)

    await component.deleteOne()

}


export const patchComponentService = async (payload: TComponentUpdate, id: string) => {
    const component = await Component.findById(id)

    if(!component) throw new AppError("Component not found", 404)

    component.set(payload)
    
    return component.save()
}
