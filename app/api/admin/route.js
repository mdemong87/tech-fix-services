import { allresourse } from "@/lib/cloudinaryConfig";


export const GET = async () => {

    try {


        const res = await allresourse();


        console.log(res);


        //response back to the front end
        return Response.json({
            message: "Fetching Image Resouses Successfull",
            status: 200,
            success: true,
            data: res
        })

    } catch (error) {



        //response back to the front end
        return Response.json({
            message: "Fetching Event Failed",
            status: 500,
            success: false
        })


    }

}