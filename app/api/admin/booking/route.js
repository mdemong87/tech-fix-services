import { UIDGanaratorForBooking } from "@/lib/helper/uIdGanarator";
import BookingModel from "@/lib/model/bookingModel";




export const GET = async (req) => {




    try {


        //added booking info in database
        const bookingData = await BookingModel.find({});


        //response back to the front end
        return Response.json({
            message: "Fetching Booking Successfull",
            status: 200,
            success: true,
            data: bookingData
        })

    } catch (error) {


        //response back to the front end
        return Response.json({
            message: "Fectching Booking Failed",
            status: 500,
            success: false
        })


    }

}





export const POST = async (req) => {


    //get login data from the frontend
    const {
        fristName,
        lastName,
        companyName,
        email,
        officeNumber,
        mobileNumber,
        assignmentTitle,
        assignmentDate,
        callTime,
        endTime,
        vanueName,
        vanueAddress,
        numberOfGuest,
        onsiteContactNumber,
        dressAttire,
        postImagetopictureTv,
        specialRequest,
        bookFor,
        agreeToTerms,
        subscribe,
        resion,
        socialMediaProfile,
        sessionInteresed,
        dsccribeLooking,
        hearAbout,
        picDate,
        picTime,
        recieveSms,
        paymentType,
        paymentAmount,
        selectedprice
    } = await req.json();


    try {


        const bookingObjectData = {

            id: await UIDGanaratorForBooking(),
            fristName,
            lastName,
            companyName,
            email,
            officeNumber,
            mobileNumber,
            assignmentTitle,
            assignmentDate,
            callTime,
            endTime,
            vanueName,
            vanueAddress,
            numberOfGuest,
            onsiteContactNumber,
            dressAttire,
            postImagetopictureTv,
            specialRequest,
            bookFor,
            agreeToTerms,
            subscribe,
            resion,
            socialMediaProfile,
            sessionInteresed,
            dsccribeLooking,
            hearAbout,
            picDate,
            picTime,
            recieveSms,
            paymentType,
            paymentAmount,
            selectedprice

        }



        //added booking info in database
        await BookingModel.create(bookingObjectData);



        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment-checkout`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                price: paymentAmount
            })

        })

        const res = await response.json();

        if (res.success) {

            //response back to the front end
            return Response.json({
                message: "Booking Successfull",
                status: 200,
                success: true,
                paymentInfodata: res?.paymentData
            })


        } else {
            //response back to the front end
            return Response.json({
                message: "Booking Failed",
                status: 500,
                success: false
            })
        }


    } catch (error) {


        //response back to the front end
        return Response.json({
            message: "Booking Failed",
            status: 500,
            success: false
        })


    }

}