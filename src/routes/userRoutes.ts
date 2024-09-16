import express from 'express';
import { creationUserController, deleteUserController, getUsersController, patchUserController} from '../controllers/userControllers';
import { getUserByIDService } from '../services/userServices';

const userRouter = express.Router()

userRouter.post('', creationUserController)
userRouter.get('', getUsersController)
userRouter.get("/:id", getUserByIDService)
userRouter.delete("/:id", deleteUserController)
userRouter.patch("/:id", patchUserController)

export default userRouter