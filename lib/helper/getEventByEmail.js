import ConnectDB from "../connectionDB";
import EventModel from "../model/eventModel";


async function getEventByEmail(email) {


    try {


        //database connection
        ConnectDB();

        // geting one user 
        const found = await EventModel.find({ email: email });
        return found;


    } catch (error) {
        throw new Error(err);
    }

}

export default getEventByEmail;