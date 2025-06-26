import ExtractHeader from "@/lib/helper/ExtracctHeader";
import getEventByEmail from "@/lib/helper/getEventByEmail";

export const GET = async (req) => {


    try {


        //extract session data from the request header
        const authheader = ExtractHeader(req);



        //get the all event from the database
        const event = await getEventByEmail(authheader);




        //response back to the front end
        return Response.json({
            message: "Fetching Event Successfull",
            status: 200,
            success: true,
            data: event
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