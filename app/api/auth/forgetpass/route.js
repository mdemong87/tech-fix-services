import getUserByEmail from "@/lib/helper/getUserByEmail";
import { OTPGanarator } from "@/lib/helper/uIdGanarator";
import OtpModel from "@/lib/model/otpmodel";
import ConnectDB from "../../../../lib/connectionDB";

export const POST = async (req) => {


    //get sign up data from the frontend
    const { email, via } = await req.json();




    try {


        //database connection
        ConnectDB();


        //check if the user is found
        const found = await getUserByEmail(email);


        if (found) {



            if (via == "Email") {

                //have to work here
                const createOTP = OTPGanarator();

                await OtpModel.updateOne({ _id: "66e30dc501da0e9035b75d60" }, { otp: createOTP });

                //response back to the frontend
                return Response.json({
                    message: "OTP Send Successfull in Your Email Address",
                    status: 200,
                    data: {
                        otp: createOTP,
                        email: email,
                        alluserData: found

                    },
                    success: true
                })

            } else {
                console.log("Via phone");

                //have to work here

                //have to change after
                //response back to the frontend
                return Response.json({
                    message: "OTP get Via Phone Number Servises in unablable Right Now",
                    status: 500,
                    success: false
                })

            }


        } else {
            //response back to the frontend
            return Response.json({
                message: "User Not Found!",
                status: 500,
                success: false
            })
        }




    } catch (err) {
        //response back to the frontend
        return Response.json({
            message: "There is a server side Error",
            status: 500,
            success: false
        })
    }


}