import { BussinesModel } from './../models/businessModelModel';
import { Query } from "mongoose"
import { Operation } from "../models/operationModel"
import { Queue } from "../models/queueModel"
import { TOperationCreation } from "../types/operationType"
import { TQueueCreation } from "../types/queueType"
import { creationQueueService, getQueueByPositionService } from './queueService';

export const creationOperationService = async (payload: TOperationCreation) => {
    const position = await findQueue(payload.partNumber, payload.bussinesModelId)

    let queue = await getQueueByPositionService(position)

    if(!queue)  queue = await newQueue()

    const newOperation = new Operation(payload)


}

export const findQueue = async (partNumber: string, bussinesModelId: string ) => {
    const queues = await Queue.find()
    let position

    if (queues.length === 1) position = 1

    for (let i = 0; i < queues.length; i++) {
        const queue = queues[i];

        if (!queue || !queue.partNumber || !queue.bussinesModelId) continue;

        if (
            queue.partNumber === partNumber &&
            String(queue.bussinesModelId) === bussinesModelId &&
            queue.batchQuantity != null && 
            queue.batchQuantity < 7
        ) {
            return Number(queue.position);
        }
    }

    return Number(position)
}

export const newQueue = async(payload: TOperationCreation) => {

}


