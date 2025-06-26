import getUserByEmail from "@/lib/helper/getUserByEmail";
import { OTPGanarator } from "@/lib/helper/uIdGanarator";
import OtpModel from "@/lib/model/otpmodel";


export const POST = async (req) => {


    //get login data from the frontend
    const { email, password } = await req.json();


    try {


        //get the current user
        const user = await getUserByEmail(email);


        if (user) {


            if (email == user?.email && password == user?.password) {



                //have to work here
                const createOTP = OTPGanarator();

                await OtpModel.updateOne({ _id: "66e30dc501da0e9035b75d60" }, { otp: createOTP });

                //response back to the frontend
                return Response.json({
                    message: "Login Successfull",
                    status: 200,
                    data: {
                        otp: createOTP,
                        email: email

                    },
                    success: true
                })

            } else {
                //response back to the frontend
                return Response.json({
                    message: "Login Credentials Not Match",
                    status: 500,
                    success: false
                })
            }

        } else {
            //response back to the frontend
            return Response.json({
                message: "NO User Found!",
                status: 500,
                success: false
            })
        }


    } catch (err) {
        //response back to the frontend
        return Response.json({
            message: "Check Your Email,Password and Role Again Or Verify your Account",
            status: 500,
            success: false
        })
    }


}




// const response = await signIn('credentials', {
//     email,
//     password,
//     redirect: false,
// });
