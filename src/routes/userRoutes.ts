import express from 'express';
import { creationUserController} from '../controllers/userControllers';

const userRouter = express.Router()

userRouter.post('', creationUserController)
userRouter.get('', getAllUsersController)

export default userRouter