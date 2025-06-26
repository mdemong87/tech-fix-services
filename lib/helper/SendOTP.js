import emailjs from "@emailjs/browser";
// Import the Twilio module using ES module syntax


export const SendOTPviaEmail = async (otp, email) => {
    // Prepare the email parameters
    const templateParams = {
        otp: otp,
        email: email,
    };

    try {
        // Send the email using EmailJS
        const res = await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,  // Correct service ID
            process.env.NEXT_PUBLIC_TEMPLATE_ID, // Correct template ID
            templateParams,                      // Email parameters
            process.env.NEXT_PUBLIC_PUBLIC_API    // Public API key
        );

        return res;  // EmailJS send method returns the response directly

    } catch (error) {
        console.error("Error sending OTP via email:", error);
        throw error; // Re-throwing the error for further handling
    }
}



// export async function SendOTPViaPhone(otp, number) {

//     // Your AccountSID and Auth Token from console.twilio.com
//     const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
//     const authToken = 'your_auth_token';

//     // Create a Twilio client instance
//     const client = Twilio(accountSid, authToken);


//     try {
//         // Send an SMS message
//         const message = await client.messages.create({
//             body: `Your OTP Code is : ${otp}`,
//             to: '+12345678901', // Replace with your phone number
//             from: '+12345678901', // Replace with a valid Twilio number
//         });

//         console.log(`Message SID: ${message}`);
//         return message;
//     } catch (error) {
//         console.error('Failed to send message:', error);
//     }

// }