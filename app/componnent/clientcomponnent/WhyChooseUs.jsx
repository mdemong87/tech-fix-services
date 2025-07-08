import Image from "next/image";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { FaMoneyCheckAlt, FaUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import image from "../../../public/assets/homeappliece-4.jpg";
import Container from "./Container";

const WhyChooseUs = () => {
    return (
        <div className="w-full py-7 md:py-16">
            <Container>
                <div className="grid grid-cols-7 gap-8">
                    <div className="col-span-7 md:col-span-4">
                        <h2 className="text-4xl font-bold">Why Choose Us for Your Appliance Repairs?</h2>
                        <p className="py-8 text-lg">
                            At Appliances Repair Qatar, we understand how frustrating a broken appliance can be. That&apos;s why we&apos;re here to fix your washing machines and refrigerators quickly, affordably, and reliably.
                        </p>
                        <div className="grid grid-cols-2 gap-5 mt-6">
                            <div className="col-span-1 flex gap-2">
                                <FaCalendarDays className="pcl2 mt-1 text-2xl" />
                                <div>
                                    <h3 className="text-xl font-bold">Same day Repairs</h3>
                                    <p className="text-gray-600 pt-1 text-md">No need to wait - we fix it fast.</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex gap-2">
                                <FaMoneyCheckAlt className="pcl2 mt-1 text-3xl" />
                                <div>
                                    <h3 className="text-xl font-bold">Affordable Prices</h3>
                                    <p className="text-gray-600 pt-1 text-md">We offer competitive pricing for all our repair services.</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex gap-2">
                                <FaUser className="pcl2 mt-1 text-3xl" />
                                <div>
                                    <h3 className="text-xl font-bold">Expert Technicians</h3>
                                    <p className="text-gray-600 pt-1 text-md">Our team is highly skilled and experienced in appliance repairs.</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex gap-2">
                                <BsFillEmojiHeartEyesFill className="pcl2 mt-1 text-4xl" />
                                <div>
                                    <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                                    <p className="text-gray-600 pt-1 text-md">We prioritize our customers and strive to exceed their expectations.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-span-7 md:col-span-3 pbg2 rounded-md h-fit">
                        <Image src={image} alt="Appliance Repair" className="h-2/4 w-full rounded-md object-cover" width={1000} height={1000} />
                        <div className="px-4 py-5 text-white">
                            <h3 className="text-xl pb-3">Home Appliance Repair</h3>
                            <ul className="text-md text-gray-200 list-disc pl-6">
                                <li>24/7 Emergency Support</li>
                                <li>Same Day Service</li>
                                <li>Expert Technicians</li>
                                <li>Affordable Prices</li>
                                <li>Customer Satisfaction Guaranteed</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default WhyChooseUs;