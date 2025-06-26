import { UIDGanaratorForUser } from "@/lib/helper/uIdGanarator";
import UserModel from "@/lib/model/userModel";
import ConnectDB from "../../../../lib/connectionDB";

export const POST = async (req) => {


    //get sign up data from the frontend
    const { fullname, email, phone, password, role } = await req.json();




    try {


        //database connection
        ConnectDB();


        //user object data formet
        const userObject = {
            uid: await UIDGanaratorForUser(),
            fullname,
            email,
            phone,
            password,
            role,
            isvarified: true
        }


        //create user in database
        await UserModel.create(userObject);

        //response back to the frontend
        return Response.json({
            message: "Registration Succesfull",
            status: 200,
            success: true
        })




    } catch (err) {
        //response back to the frontend
        return Response.json({
            message: "There is a server side Error",
            status: 500,
            success: false
        })
    }


}