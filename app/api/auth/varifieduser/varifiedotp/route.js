import OtpModel from "@/lib/model/otpmodel";
import UserModel from "@/lib/model/userModel";

export const POST = async (req) => {


    try {


        const { otp, userData } = await req.json();


        const findstoreotp = await OtpModel.find({ _id: "66e30dc501da0e9035b75d60" });



        if (findstoreotp[0].otp == otp) {


            await UserModel.updateOne({ uid: userData?.uid }, {
                isvarified: true
            })

            return Response.json({
                message: "OTP Verification Successfull",
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



    } catch (error) {
        return Response.json({
            message: "OTP Verification Failed",
            status: 500,
            success: false
        })
    }







}