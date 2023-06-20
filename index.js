import mongoose from "mongoose";
import app from "./src/app.js";
import config from "./src/config/index.js";
(async () => {

    try {
        // mongoose.connect("mongodb://localhost:27017/ecomm") when you use mongodb on your local system
        await mongoose.connect(config.MONGODB_URL)
        console.log("DB connected successfully ")

        app.on('error', (err) => {
            console.error("ERROR: ", err)
            throw err
        })

        const onListening = () =>{
            console.log(`listening on port number ${config.PORT}`)
        }

        app.listen(config.PORT, onListening )

    } catch (err) {
        console.error("ERROR: ", err)
        throw err
    }

})()