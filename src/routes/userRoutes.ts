import { validateAdm } from './../middlewares/validateAdm';
import express from 'express';
import { creationUserController, deleteUserController, getUserByIdController, getUsersController, patchUserController} from '../controllers/userControllers';
import { validateToken } from '../middlewares/validateToken';
import { validateOwnUser } from '../middlewares/validateOwnUser';

const userRouter = express.Router()

userRouter.post('',creationUserController)
userRouter.get('', validateToken, validateAdm, getUsersController)
userRouter.get("/:id",validateToken, validateAdm, getUserByIdController)
userRouter.delete("/:id",validateToken, validateAdm, deleteUserController)
userRouter.patch("/:id",validateToken, validateOwnUser, patchUserController)

export default userRouter