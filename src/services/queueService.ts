import { Queue } from './../models/queueModel';
import AppError from "../appError";
import { TQueueCreation, TQueueUpdate } from "../types/queueType";

export const creationQueueService = async (payload: TQueueCreation) => {
    const newQueue = new Queue(payload)
    console.log(newQueue)
    return await newQueue.save()
}

export const getQueueByIdService = async (id: string) => {
    const queue = await Queue.findById(id)

    if(!queue) throw new AppError("Queue not found", 404)

    return queue
  
}

export const getAllQueuesService = async () => {
    const queues = await Queue.find()
    console.log(queues)
    return queues
    
}

export const getQueueByNameService = async (name: string) => {
    const queue = await Queue.find(
       { "name": { "$regex": name, "$options": "i" } }
    )

    if(!queue) throw new AppError("Queue not found", 404)

    console.log(queue);

    return queue
    
}

export const getQueueByPartNumberService = async (partNumber: string) => {
    const queue = await Queue.find(
       { "partNumber": { "$regex": partNumber, "$options": "i" } }
    )

    if(!queue) throw new AppError("Queue not found",404)

    console.log(queue);

    return queue
    
}

export const getQueueByBussinesModel = async (bussinesModel: string) => {
    const queue = await Queue.find(
       { "bussinesModel": { "$regex": bussinesModel, "$options": "i" } }
    )

    if(!queue) throw new AppError("Queue not found", 404)

    console.log(queue);

    return queue   
}

export const getQueueByPositionService = async (position: number) => {
    const queue = await Queue.find({position: position})

    if(!queue) throw new AppError("Queue not found", 404)

    console.log(queue)
    return queue 
}

export const deleteQueueService = async (id: string) => {
    const queue = await Queue.findById(id)
    if(!queue) throw new AppError("Queue not found", 404)
    console.log(queue);
    queue.deleteOne()
}

export const patchQueueService = async (payload: TQueueUpdate, id: string) => {
    const queue = await Queue.findById(id)
    if(!queue) throw new AppError("Queue not found", 404)
    
    queue.set(payload)
    return await queue.save()
}


