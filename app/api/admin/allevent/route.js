
export const GET = async () => {


    try {


        // //get the all event from the database
        // const allevent = await EventModel.find({});






        //response back to the front end
        return Response.json({
            message: "Fetching All Event Successfull",
            status: 200,
            success: true,
        })

    } catch (error) {


        //response back to the front end
        return Response.json({
            message: "Fetching All Event Failed",
            status: 500,
            success: false
        })


    }

}