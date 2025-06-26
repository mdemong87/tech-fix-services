import { model, models, Schema } from "mongoose";


//user schema
const BookingSchema = new Schema({
    id: Number,
    fristName: String,
    lastName: String,
    companyName: String,
    email: String,
    officeNumber: String,
    mobileNumber: String,
    assignmentTitle: String,
    assignmentDate: String,
    callTime: String,
    endTime: String,
    vanueName: String,
    vanueAddress: String,
    numberOfGuest: String,
    onsiteContactNumber: String,
    dressAttire: String,
    postImagetopictureTv: Boolean,
    specialRequest: String,
    bookFor: String,
    agreeToTerms: Boolean,
    subscribe: Boolean,
    resion: String,
    socialMediaProfile: String,
    sessionInteresed: String,
    dsccribeLooking: String,
    hearAbout: String,
    picDate: Date,
    picTime: String,
    recieveSms: Boolean,
    paymentType: Boolean,
    paymentAmount: Number,
    selectedprice: Number,
    createdAt: { type: Date, default: Date.now() }
})


//user model
const BookingModel = models.BookingModel || model("BookingModel", BookingSchema);


//export the model
export default BookingModel;



