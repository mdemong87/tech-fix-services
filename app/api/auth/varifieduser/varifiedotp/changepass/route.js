import UserModel from "@/lib/model/userModel";

export const PUT = async (req) => {


    try {


        const { pass, userData } = await req.json();


        await UserModel.updateOne({ uid: userData?.uid }, {
            password: pass
        })



        return Response.json({
            message: "Password Update Successfull",
            status: 200,
            success: true
        })


    } catch (error) {
        return Response.json({
            message: "Password Update Failed",
            status: 500,
            success: false
        })
    }

}