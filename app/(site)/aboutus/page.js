import Container from "@/app/componnent/clientcomponnent/Container";
import { FaAddressCard, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutUS = () => {
    return (
        <main className="h-fit w-screen pt-28 pb-14">
            <Container>
                <div>
                    <h2 className="text-3xl font-bold text-center pt-8">About Us</h2>
                    <p className="text-gray-600 text-semibold text-xl text-center mt-9">
                        Picture TV media news & educational channel that Provides up-to-date information on Fashion, Beauty, Business - Finance - Fintech - Banking, Wellness & Fitness, New Technology, Automotive, Culinary Arts Culture and Lifestyle. Twice a year we cover New York fashion weeks from backstage to the runway, and the red carpet event.. Picture TV channel is to  educate and inform you on what to wear, how to wear it and where to buy it. Picture TV also shares with our audience where to shop, dine, travel and reasonable locations for overnight stay. However in some of our content we promote job seekers to fine.
                    </p>
                </div>
                <div>
                    <div className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-10">

                        <div className="w-full h-[300px] bg-white shadow-xl p-5 flex justify-center items-center rounded-md">
                            <div className="flex flex-col items-center">
                                <div className="p-5 pbg2 rounded-full mb-5">
                                    <FaAddressCard className="text-white text-4xl" />
                                </div>
                                <h2 className="text-2xl text-gray-500 font-bold text-center">228 Park Ave South Suite 949383 New York, NY 10003</h2>
                            </div>
                        </div>
                        <div className="w-full h-[300px] bg-white shadow-xl p-5 flex justify-center items-center rounded-md">
                            <div className="flex flex-col items-center">
                                <div className="p-5 pbg2 rounded-full mb-5">
                                    <MdEmail className="text-white text-4xl" />
                                </div>
                                <h2 className="text-2xl text-gray-500 font-bold text-center">picturetimetv@gmail.com</h2>
                            </div>
                        </div>
                        <div className="w-full h-[300px] bg-white shadow-xl p-5 flex justify-center items-center rounded-md">
                            <div className="flex flex-col items-center">
                                <div className="p-5 pbg2 rounded-full mb-5">
                                    <FaPhone className="text-white text-4xl" />
                                </div>
                                <h2 className="text-2xl text-gray-500 font-bold text-center">929.888.3820 </h2>
                            </div>
                        </div>

                    </div>
                </div>
            </Container >
        </main >
    )
}


export default AboutUS;