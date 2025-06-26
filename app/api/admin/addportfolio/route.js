import { issingleormultipulUpload } from "@/lib/cloudinaryConfig";
import getUserByEmail from "@/lib/helper/getUserByEmail";
import { UIDGanaratorForPortfolio } from "@/lib/helper/uIdGanarator";
import PortfolioModel from "@/lib/model/portfolioModel";

export const POST = async (req) => {


    //get login data from the frontend
    const { user, catagory, title, type, dis, file } = await req.json();

    try {

        //get user profile for know whick user try to create event
        const userProfile = await getUserByEmail(user?.email);



        //create uniqu event id
        const eventUniqueId = await UIDGanaratorForPortfolio();


        //get ready for the crete database recoard
        const objectData = {
            eventid: eventUniqueId,
            uid: userProfile.uid,
            fullname: userProfile.fullname,
            email: userProfile.email,
            role: userProfile.role,
            catagory: catagory,
            title: title,
            type: type,
            dis: dis,
            file: await issingleormultipulUpload(file, type)
        }



        //create Event in database
        await PortfolioModel.create(objectData);


        //response back to the front end
        return Response.json({
            message: "Portfolio Posted Successfully",
            status: 200,
            success: true
        })


    } catch (error) {

        console.log(error);

        //response back to front end 
        return Response.json({
            message: "Portfolio Posted Failed",
            status: 500,
            success: false
        })
    }

}


