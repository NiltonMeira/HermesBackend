import AppError from "../appError";
import { Queue } from "../models/queueModel";
import { TQueueCreation } from "../types/queueType";

export const creationQueueSercie = async (payload: TQueueCreation) => {
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
