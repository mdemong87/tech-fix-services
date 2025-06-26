import getUserByEmail from "@/lib/helper/getUserByEmail";
import { OTPGanarator } from "@/lib/helper/uIdGanarator";
import OtpModel from "@/lib/model/otpmodel";

export const POST = async (req) => {


    try {


        const { email, via } = await req.json();


        // check the user is exist or not
        const isfoundUser = await getUserByEmail(email);




        if (!isfoundUser) {



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
                        email: email

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
                message: "User Already Exists",
                status: 500,
                success: false
            })
        }



    } catch (error) {


        //response back to the frontend
        return Response.json({
            message: "OTP Send Failed",
            status: 500,
            success: false
        })
    }


}