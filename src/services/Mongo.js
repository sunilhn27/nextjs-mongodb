import mongoose from "mongoose"

const ConnectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            mongoose.connect(process.env.MONGO_URI)
            console.log("Connected to Mongo succesfully")
        }

    } catch (error) {
        console.log(error)
    }

}

export default ConnectDB;