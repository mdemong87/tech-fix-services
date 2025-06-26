const { default: Container } = require("@/app/componnent/clientcomponnent/Container")

const ContactUs = () => {
    return (
        <main className="w-screen h-fit pt-32 pb-10">
            <Container>
                <div>
                    <h2 className="text-3xl font-bold text-center pt-8">Contact Us</h2>
                    <form className='w-full grid grid-cols-1 gap-5'>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="bookingFirstName">First Name:</label>
                            <input
                                type="text"
                                name="bookingFirstName"
                                id="bookingFirstName"
                                className='booking-input-field p-3 rounded-md'
                                placeholder='First Name'
                            />

                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="bookingLastName">Last Name:</label>
                            <input
                                type="text"
                                name="bookingLastName"
                                id="bookingLastName"
                                className='booking-input-field p-3 rounded-md'
                                placeholder='Last Name'
                            />

                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="bookingEmail">Email:</label>
                            <input
                                type="email"
                                name="bookingEmail"
                                id="bookingEmail"

                                className='booking-input-field p-3 rounded-md'
                                placeholder='info@gmail.com'
                            />

                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="bookingRequest">Discribe Message:</label>
                            <textarea
                                name="bookingRequest"
                                id="bookingRequest"
                                cols="30"
                                rows="5"
                                className='booking-input-field p-3 rounded-md'
                                placeholder='Discribe Message:'
                            >
                            </textarea>
                        </div>

                        <div className="mt-6">
                            <div className="flex gap-3 items-center">
                                <input className="w-[20px] h-[20px]" type="checkbox" />
                                <span className="text-xl pcl2">I Agree to the Terms and Conditions</span>
                            </div>
                            <div className="flex gap-3 items-center mt-2">
                                <input className="w-[20px] h-[20px]" type="checkbox" />
                                <span className="text-xl pcl2">Subscribe to our newsletter</span>
                            </div>
                        </div>

                        <button className="pbg2 mt-5 px-10 py-3 w-fit text-center text-xl font-semibold text-white rounded-md">Submit</button>

                    </form>
                </div>
            </Container>
        </main>
    )
}


export default ContactUs;