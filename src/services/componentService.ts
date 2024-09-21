import AppError from "../appError"
import { Component } from "../models/componentModel"
import { TComponentCreation, TComponentUpdate } from "../types/componentType"

export const creationComponentService = async (payload: TComponentCreation) => {
    const newComponent = new Component(payload)
    const validate = await getComponentByNameService(payload.name)
    if (validate.length > 0) throw new AppError("Component not found", 404)

    console.log(newComponent);
    return await newComponent.save()
}

export const getComponentByIdService = async (id: string) => {
    const component = await Component.findById(id)

    if (!component) throw new AppError("Component not found", 404)

    console.log(component);
    return component
}

export const getAllComponentsService = async () => {
    const components = await Component.find()

    if (!components) throw new AppError("Component not found", 404)
    
    console.log(components);
    return components
}

export const getComponentByNameService = async (name: string) => {
    const components = await Component.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    if (!components) throw new AppError("Component not found", 404)
    
    console.log(components);
    return components
}

export const getComponentsByPartNumberService = async (partNUmber: string) => {
    const components = await Component.find(
        { "partNumber": { "$regex": partNUmber, "$options": "i" } }

    )

    if (!components) throw new AppError("Component not found", 404)

    console.log(components);

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
    
    return await component.save()
}
