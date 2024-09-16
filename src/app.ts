import "express-async-errors"
import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes"
import { handleError } from "./middlewares/handleError"

const app = express()

app.use(cors(
    {
        origin: "*"
    }
))

app.use(express.json())

app.use("/api/users",userRouter)

app.use(handleError)

export default app