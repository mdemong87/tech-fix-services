import mongoose from "mongoose";

async function ConnectDB() {

    try {
        //connect database
        await mongoose.connect(`${process.env.NEXT_PUBLIC_DATABASE_URL}`, (err) => {
            if (!err) {
                console.log("database is connected...");
            } else {
                console.log("database is not connected...");
                console.log(err);
            }
        });
    } catch (error) {
        console.log("database is not connected...");
        console.log(error);
    }
}

export default ConnectDB;