import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes"

const app = express()

app.use(cors(
    {
        origin: "*"
    }
))

app.use(express.json())

app.use(userRouter)

export default app