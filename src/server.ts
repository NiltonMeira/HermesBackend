import mongoose from "mongoose"
import 'dotenv/config'
import app from "./app"


const startServer = async () => {
    await mongoose.connect(process.env.DB_URL!)
    app.listen(1960, () => console.log("Listening to port 1960")
    )
}

startServer()


