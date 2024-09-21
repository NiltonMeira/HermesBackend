import "express-async-errors"
import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes"
import { handleError } from "./middlewares/handleError"
import authRouter from "./routes/authRoutes"
import productRouter from "./routes/productRoutes"
import familyRouter from "./routes/familyRoutes"
import coreRoutes from "./routes/coreRoutes"
import remanProductRouter from "./routes/remanProductRoutes"
import componentRoutes from "./routes/componentsRoutes"
import bodyRouter from "./routes/bodyRoutes"
import rpbRouter from "./routes/rpbRoutes"
import rpcRouter from "./routes/rpcRoutes"
import bussinesModelRouter from "./routes/bussinesModelRoutes"

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
app.use("/api/familys", familyRouter)
app.use("/api/cores", coreRoutes)
app.use("/api/remanProduct", remanProductRouter)
app.use("/api/components", componentRoutes )
app.use("/api/bodies", bodyRouter )
app.use("/api/rpb", rpbRouter)
app.use("/api/rpc", rpcRouter)
app.use("/api/bm", bussinesModelRouter)


app.use(handleError)

export default app