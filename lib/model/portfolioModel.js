import { model, models, Schema } from "mongoose";


//user schema
const PortfolioSchema = new Schema({
    eventid: Number,
    uid: Number,
    fullname: String,
    email: String,
    role: String,
    catagory: String,
    title: String,
    type: String,
    dis: String,
    file: Array,
    isApproved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() }
})


//user model
const PortfolioModel = models.PortfolioModel || model("PortfolioModel", PortfolioSchema);


//export the model
export default PortfolioModel;