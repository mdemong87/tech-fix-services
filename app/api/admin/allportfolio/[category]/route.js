import getRouteSideId from "@/lib/helper/getRoutesideId";
import PortfolioModel from "@/lib/model/portfolioModel";

export const GET = async (req) => {



    try {




        //get the dynamic pathname
        const id = getRouteSideId(req);




        //get single portfolio by portfolio category from the database
        const portfolio = await PortfolioModel.find({ catagory: id });


        console.log('ths is portfolio....');
        console.log(portfolio);

        //response back to the front end
        return Response.json({
            message: "Fetching Portfolio Successfull",
            status: 200,
            success: true,
            data: portfolio
        })

    } catch (error) {


        //response back to the front end
        return Response.json({
            message: "Fetching Portfolio Failed",
            status: 500,
            success: false
        })


    }

}