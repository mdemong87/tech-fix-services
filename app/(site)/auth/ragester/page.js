'use client'

import Loading from "@/app/componnent/clientcomponnent/Loading";
import { SendOTPviaEmail } from "@/lib/helper/SendOTP";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ragester = () => {

    const router = useRouter();


    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const [conpass, setconpass] = useState('');
    const [role, setrole] = useState('');
    const [via, setvia] = useState("Email");
    const [isloading, setisloading] = useState(false);
    const [stape, setstape] = useState(1);
    const [userData, setuserData] = useState('');
    const [otp, setotp] = useState('');









    //handle verify email with 6 digit code
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


                if (res.success) {



                    if (via == "Email") {
                        const issend = await SendOTPviaEmail(res?.data?.otp, res?.data?.email);

                        if (issend?.status == 200) {
                            setisloading(false);
                            toast.success(res.message);
                            setstape(2);
                            setuserData(res.data?.user);


                        } else {
                            setisloading(false);
                            toast.error("Email Send Failed");
                        }
                    }
                } else {
                    setisloading(false);
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

        if (otp != '') {

            setisloading(true);

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
                setisloading(false);

                if (res.success) {

                    toast.success(res.message);
                    setstape(3);
                } else {
                    toast.error(res.message);
                }


            } catch (error) {
                toast.error("OTP Verification Failed");
            }
        }
    }








    //handle signup function for stape two
    async function handleSignUp() {



        if (fullname !== '' && phone !== '' && password !== '' && conpass !== '' && role !== '' && role !== "Role") {

            if (password === conpass) {

                setisloading(true);

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        fullname,
                        email,
                        phone,
                        password,
                        role
                    })

                })

                const res = await response.json();

                setisloading(false);
                setemail('');
                setphone('');
                setconpass('');
                setfullname('');
                setpassword('');
                setrole('');

                if (res.success) {
                    toast.success(res.message);
                    setTimeout(() => {
                        router.push("/auth/login");
                    }, 500);
                } else {
                    toast.error(res.message);
                }
            } else {
                toast.warn("Password and Confirm Password Does not Match");
            }

        } else {
            toast.warn("Enter All Flied");
        }



    }






    return (
        <main className="h-fit pt-36 pb-14 w-screen">
            {isloading && <Loading />}
            <div className="flex justify-center items-cetner w-full h-full">
                <div className="border border-gray-300 p-8 rounded-md h-fit w-fit">
                    <h2 className="text-2xl text-center font-bold text-shadow-lg text-gray-800 pb-5">Sign Up</h2>

                    {
                        stape == 1 || stape == 2 ? (
                            <div>
                                <input
                                    onChange={(e) => { setemail(e.target.value) }}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className='booking-input-field border border-gray-500 p-3 w-full rounded-md'
                                    placeholder='Enter Email'
                                />

                                {
                                    stape == 2 && (
                                        <input
                                            onChange={(e) => { setotp(e.target.value) }}
                                            type="number"
                                            name="email"
                                            id="email"
                                            className='booking-input-field border border-gray-500 p-3 mt-3 w-full rounded-md'
                                            placeholder='Enter 6 Digit OTP Code'
                                        />
                                    )
                                }


                                <button onClick={() => { stape == 1 ? sendotp() : stape == 2 && varification() }} className="pbg mt-5 w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                                    {
                                        stape == 1 ? (
                                            "Verify Email with 6 Digit Code"
                                        ) : (
                                            stape == 2 && "Verify Email"
                                        )

                                    }
                                </button>


                                <div className="text-center mt-4">
                                    <p>
                                        Already have an Account?
                                        <Link className="pcl2 pl-2 underline" href={'/auth/login'}>Login</Link>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="mt-6 flex flex-col gap-5">

                                    <input
                                        onChange={(e) => { setfullname(e.target.value) }}
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        className='booking-input-field w-[320px] p-3 rounded-md'
                                        placeholder='Full Name'
                                    />


                                    <input
                                        onChange={(e) => { setphone(e.target.value) }}
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className='booking-input-field w-[320px] p-3 rounded-md'
                                        placeholder='Mobile Number'
                                    />





                                    <input
                                        onChange={(e) => { setpassword(e.target.value) }}
                                        type="password"
                                        name="password"
                                        id="password"
                                        className='booking-input-field w-[320px] p-3 rounded-md'
                                        placeholder='Password'
                                    />

                                    <input
                                        onChange={(e) => { setconpass(e.target.value) }}
                                        type="password"
                                        name="conpass"
                                        id="conpass"
                                        className='booking-input-field w-[320px] p-3 rounded-md'
                                        placeholder='Confirm password'
                                    />



                                    <select onChange={(e) => { setrole(e.target.value) }} className='booking-input-field w-[320px] p-3 rounded-md'>
                                        <option value="Role">Select Category</option>
                                        <option value="New Member">New Member</option>
                                        <option value="Client">Client</option>
                                        <option value="Photographer">Photographer</option>
                                        <option value="Videographer">Videographer</option>
                                    </select>



                                    <button onClick={(e) => { handleSignUp() }} className="pbg w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                                        Sign Up
                                    </button>


                                    <div className="text-center">
                                        <p>
                                            Already have an Account?
                                            <Link className="pcl2 pl-2 underline" href={'/auth/login'}>Login</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            <ToastContainer />
        </main>
    )
}


export default Ragester;