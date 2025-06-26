import { customAlphabet } from "nanoid";
import ConnectDB from "../connectionDB";
import EventModel from "../model/eventModel";
import PortfolioModel from "../model/portfolioModel";
import UserModel from "../model/userModel";



export const UIDGanaratorForUser = async () => {
    try {

        //database connection here
        ConnectDB();

        //nanoid initial
        const customid = customAlphabet("1234567890", 7);
        const unickId = customid();

        //just ensure that same Id does not repecte twice
        const isexiste = await UserModel.findOne({ uid: unickId });
        const newId = isexiste == null || false ? unickId : customid();
        return newId;

    } catch (error) {
        console.log(error);
    }
}


export const UIDGanaratorForEvent = async () => {
    try {

        //database connection here
        ConnectDB();

        //nanoid initial
        const customid = customAlphabet("1234567890", 7);
        const unickId = customid();

        //just ensure that same Id does not repecte twice
        const isexiste = await EventModel.findOne({ eventid: unickId });
        const newId = isexiste == null || false ? unickId : customid();
        return newId;

    } catch (error) {
        console.log(error);
    }
}


export const UIDGanaratorForPortfolio = async () => {
    try {

        //database connection here
        ConnectDB();

        //nanoid initial
        const customid = customAlphabet("1234567890", 7);
        const unickId = customid();

        //just ensure that same Id does not repecte twice
        const isexiste = await PortfolioModel.findOne({ eventid: unickId });
        const newId = isexiste == null || false ? unickId : customid();
        return newId;

    } catch (error) {
        console.log(error);
    }
}



export function OTPGanarator() {
    //nanoid initial
    const customid = customAlphabet("1234567890", 6);
    const otp = customid();
    return otp;
}




export const UIDGanaratorForBooking = async () => {
    try {

        //database connection here
        ConnectDB();

        //nanoid initial
        const customid = customAlphabet("1234567890", 7);
        const unickId = customid();

        //just ensure that same Id does not repecte twice
        const isexiste = await PortfolioModel.findOne({ id: unickId });
        const newId = isexiste == null || false ? unickId : customid();
        return newId;

    } catch (error) {
        console.log(error);
    }
}