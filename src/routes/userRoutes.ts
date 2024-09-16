import express from 'express';
import { creationUserController, deleteUserController, getUserByIdController, getUsersController, patchUserController} from '../controllers/userControllers';

const userRouter = express.Router()

userRouter.post('', creationUserController)
userRouter.get('', getUsersController)
userRouter.get("/:id", getUserByIdController)
userRouter.delete("/:id", deleteUserController)
userRouter.patch("/:id", patchUserController)

export default userRouter