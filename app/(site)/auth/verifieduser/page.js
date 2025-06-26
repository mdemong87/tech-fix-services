'use client'

import Loading from "@/app/componnent/clientcomponnent/Loading";
import { SendOTPviaEmail } from "@/lib/helper/SendOTP";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { default: Container } = require("@/app/componnent/clientcomponnent/Container");

const VerifiedUser = () => {


    const router = useRouter();
    const [email, setemail] = useState('');
    const [via, setvia] = useState("Email");
    const [isloading, setisloading] = useState(false);
    const [otp, setotp] = useState(null);
    const [allok, setallok] = useState(false);
    const [userData, setuserData] = useState('');





    //send otp function
    async function sendotp() {


        if (email != "") {


            setisloading(true);

            try {


                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/varifieduser`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        email,
                        via
                    })

                });

                const res = await response.json();
                setisloading(false);

                if (res.success) {

                    toast.success(res.message);
                    setTimeout(() => {

                        //redirect to dashboard page
                        setuserData(res.data?.user);
                        setallok(true);

                    }, 500);


                    if (via == "Email") {
                        const issend = await SendOTPviaEmail(res?.data?.otp, res?.data?.user?.fullname, res?.data?.email);

                        if (issend?.status == 200) {
                            toast.success(res.message);
                            setTimeout(() => {

                                //redirect to dashboard page
                                setuserData(res.data?.user);
                                setallok(true);

                            }, 500);
                        } else {
                            toast.error("Email Send Failed");
                        }
                    }
                } else {
                    toast.error(res.message);
                }

            } catch (error) {
                setisloading(false);
                console.log(error);
            }

        } else {
            toast.error("Enter Email");
        }

    }





    //varification otp function here
    async function varification() {

        if (otp != null) {
            try {

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/varifieduser/varifiedotp`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({

                        otp,
                        userData
                    })

                });
                const res = await response.json();

                if (res.success) {

                    toast.success(res.message);
                    setTimeout(() => {

                        //redirect to dashboard page
                        router.push("/auth/ragester");

                    }, 500);
                } else {
                    toast.error(res.message);
                }


            } catch (error) {
                toast.error("OTP Verification Failed");
            }
        }
    }




    return (
        <main className="pt-32 pb-10">
            {isloading && <Loading />}
            <Container>
                <div className="flex justify-center items-center w-screen h-fit py-12">
                    <div className="w-[600px] bg-white p-6 rounded-md">

                        <div className={`${allok && "hidden"}`}>
                            <h2 className="text-2xl text-center pb-6 font-bold text-shadow-lg text-gray-800">User Verification</h2>

                            <input
                                onChange={(e) => { setemail(e.target.value) }}
                                type="email"
                                name="email"
                                id="email"
                                className='booking-input-field border border-gray-500 p-3 w-full rounded-md'
                                placeholder='Enter Registration Email'
                            />

                            <div className="py-5">
                                <h3 className="text-lg text-gray-800 font-semibold">Where you Would like to Get the OPT Code?</h3>
                                <div className="flex gap-2 mt-3 items-center">
                                    <input
                                        checked={via === "Email"}
                                        onChange={(e) => { setvia("Email") }}
                                        type="checkbox"
                                        className='w-[25px] h-[25px] rounded-md'
                                    />
                                    <span className="text-lg">In Eamil</span>
                                </div>
                                <div className="flex gap-2 mt-3 items-center">
                                    <input checked={via === "Phone"}
                                        onChange={(e) => { setvia("Phone") }}
                                        type="checkbox"
                                        className='w-[25px] h-[25px] rounded-md'
                                    />
                                    <span className="text-lg">In Mobile Number</span>
                                </div>

                            </div>


                            <button disabled={allok} onClick={() => { sendotp() }} className="pbg mt-3 w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                                Send OTP
                            </button>
                        </div>



                        {
                            allok && (
                                <div className="w-full pt-8 bg-white rounded-md">

                                    <h2 className="text-2xl text-center pb-6 font-bold text-shadow-lg text-gray-800">Verified OTP</h2>

                                    <input
                                        onChange={(e) => { setotp(e.target.value) }}
                                        type="number"
                                        name="email"
                                        id="email"
                                        className='booking-input-field border border-gray-500 p-3 w-full rounded-md'
                                        placeholder='Enter 6 Digit OTP Code'
                                    />


                                    <button onClick={() => { varification() }} className="pbg mt-3 w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                                        Verified OTP
                                    </button>

                                </div>
                            )
                        }













                    </div>
                </div>
            </Container>
            <ToastContainer />
        </main>
    )
}

export default VerifiedUser;