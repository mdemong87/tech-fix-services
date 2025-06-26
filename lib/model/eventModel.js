import { model, models, Schema } from "mongoose";


//user schema
const EventSchema = new Schema({
    eventid: Number,
    uid: Number,
    fullname: String,
    email: String,
    role: String,
    title: String,
    type: String,
    dis: String,
    file: Array,
    isApproved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() }
})


//user model
const EventModel = models.EventModel || model("EventModel", EventSchema);


//export the model
export default EventModel;