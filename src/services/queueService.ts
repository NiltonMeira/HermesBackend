import { Queue } from './../models/queueModel';
import AppError from "../appError";
import { TQueueCreation, TQueueUpdate } from "../types/queueType";

export const creationQueueService = async (payload: TQueueCreation) => {
    const newQueue = new Queue(payload)

    payload.position = await findPosition(payload)
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


export const findPosition = async (payload: TQueueCreation) => {
    const queues = await Queue.find()
    let position

    if (queues.length === 1) position = 1

    for (let i = 0; i < queues.length; i++) {
        const queue = queues[i];

        if (!queue || !queue.partNumber || !queue.bussinesModelId) continue;

        if (
            queue.partNumber === payload.partNumber &&
            String(queue.bussinesModelId) === payload.bussinesModelId &&
            queue.batchQuantity != null && 
            queue.batchQuantity < 7
        ) {
            return Number(queue.position);
        }
    }

    for (let i = 0; i < queues.length; i++) {
        const queue = queues[i];

        if (!queue || !queue.partNumber || !queue.bussinesModelId) continue;

        if (queue.position = i) {
            return Number(queue.position);
        }
    }

    return Number(position)
}
