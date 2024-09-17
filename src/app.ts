import "express-async-errors"
import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes"
import { handleError } from "./middlewares/handleError"
import authRouter from "./routes/authRoutes"
import productRouter from "./routes/productRoutes"

const app = express()

app.use(cors(
    {
        origin: "*"
    }
))

app.use(express.json())

app.use("/api/users",userRouter)
app.use("/api/auth", authRouter)
app.use("/api/products", productRouter)

app.use(handleError)

export default app