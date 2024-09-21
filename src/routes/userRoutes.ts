import express from 'express';
import { creationUserController, deleteUserController, getUserByIdController, getUsersController, patchUserController} from '../controllers/userControllers';
import { validateToken } from '../middlewares/validateToken';
import { validateOwnUser } from '../middlewares/validateOwnUser';

const userRouter = express.Router()

userRouter.post('', creationUserController)
userRouter.get('', getUsersController)
userRouter.get("/:id", getUserByIdController)
userRouter.delete("/:id", deleteUserController)
userRouter.patch("/:id",validateToken, validateOwnUser, patchUserController)

export default userRouter