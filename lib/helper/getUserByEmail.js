import ConnectDB from "../connectionDB";
import UserModel from "../model/userModel";


async function getUserByEmail(email) {


    try {


        //database connection
        ConnectDB();

        // geting one user 
        const found = await UserModel.findOne({ email: email });
        return found;


    } catch (error) {
        throw new Error(err);
    }

}

export default getUserByEmail;