import { signIn } from "@/lib/auth";
import getUserByEmail from "@/lib/helper/getUserByEmail";
import ConnectDB from "../../../../lib/connectionDB";


export const POST = async (req) => {


    //get login data from the frontend
    const { email, password } = await req.json();


    try {

        ConnectDB();

        const isAdmin = await getUserByEmail(email);

        if (isAdmin) {
            const response = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });


            return Response.json({
                message: "Login Successfull",
                status: 200,
                success: true
            })

        } else {
            //response back to the frontend
            return Response.json({
                message: "Admin Not Found!",
                status: 500,
                success: false
            })
        }





    } catch (err) {
        //response back to the frontend
        return Response.json({
            message: "There was Server Side Problem",
            status: 500,
            success: false
        })
    }


}





