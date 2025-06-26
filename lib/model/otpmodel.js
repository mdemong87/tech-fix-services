import { model, models, Schema } from "mongoose";


//user schema
const OtpSchema = new Schema({
    otp: String
})


//user model
const OtpModel = models.OtpModel || model("OtpModel", OtpSchema);


//export the model
export default OtpModel;