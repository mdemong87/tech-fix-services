import { signIn } from "@/lib/auth";
import OtpModel from "@/lib/model/otpmodel";
import ConnectDB from "../../../../../lib/connectionDB";


export const POST = async (req) => {


    //get login data from the frontend
    const { otp, email, password } = await req.json();


    try {

        ConnectDB();


        const findstoreotp = await OtpModel.find({ _id: "66e30dc501da0e9035b75d60" });


        if (findstoreotp[0].otp == otp) {



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
            return Response.json({
                message: "OTP Verification Failed",
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





