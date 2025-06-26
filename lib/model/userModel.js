import { model, models, Schema } from "mongoose";


//user schema
const UserSchema = new Schema({
    uid: Number,
    fullname: String,
    email: String,
    phone: String,
    password: String,
    role: String,
    isvarified: Boolean,
    createdAt: { type: Date, default: Date.now() }
})


//user model
const UserModel = models.UserModel || model("UserModel", UserSchema);


//export the model
export default UserModel;