import { Request, Response } from "express"
import { authService } from "../services/authService"

export const authController = async (req: Request, res: Response ) => {
    const service = await authService(req.body)
    res.status(200).json({token: service})
}