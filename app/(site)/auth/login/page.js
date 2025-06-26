'use client'
import Loading from "@/app/componnent/clientcomponnent/Loading";
import { SendOTPviaEmail } from "@/lib/helper/SendOTP";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {


    const router = useRouter();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [ispassshow, setispassshow] = useState(false);
    const [isloading, setisloading] = useState(false);
    const [stape, setstape] = useState(1);
    const [otp, setotp] = useState('');
    const fromPage = useStore((state) => state.fromPage);
    const setrander = useStore((state) => state.setrander);
    const ispersonal = useStore((state) => state.ispersonal);
    const shootType = useStore((state) => state.shootType);



    //handle handlelogin function here
    async function handlelogin() {





        if (email !== '' && password !== '') {

            setisloading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                })

            })

            const res = await response.json();

            if (res.success) {



                const issend = await SendOTPviaEmail(res?.data?.otp, res?.data?.email);

                if (issend?.status == 200) {
                    setisloading(false);
                    setstape(2);
                    toast.success("One Time Password Send Successfully");

                } else {
                    setisloading(false);
                    toast.error("There was a server side Problem. Try Again");
                }

            } else {
                setisloading(false);
                toast.error(res.message);
            }

        } else {
            setisloading(false);
            toast.error("Enter All Flied");
        }


    }





    //handle login otp verification
    async function loginotpVerify() {
        if (otp != '') {


            setisloading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login/otpverify`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    otp,
                    email,
                    password
                })

            })

            const res = await response.json();

            if (res.success) {
                setisloading(false);
                toast.success(res.message);
                setTimeout(() => {
                    if (fromPage !== 'booking') {
                        location.href = `${process.env.NEXT_PUBLIC_BASE_URL}`;
                    } else {



                        if (ispersonal && (shootType == 'Family' || shootType == 'Graduation' || shootType == 'Party' || shootType == 'Engagement' || shootType == 'Maternity' || shootType == 'Children' || shootType == 'Pet' || shootType == 'Anniversary' || shootType == 'Others')) {
                            router.push('/booking');
                            setrander(2);
                        } else {
                            router.push(`/booking`);
                            setrander(3);
                        }

                    }

                }, 500);
            } else {
                setisloading(false);
                toast.error(res.message);
            }

        } else {
            toast.warn("Enter OTP");
        }
    }






    return (
        <main className="h-fit pt-36 pb-14 w-screen">
            {isloading && <Loading />}
            <div className="flex justify-center items-cetner w-full h-full">
                <div className="border border-gray-300 p-8 rounded-md h-fit w-fit">
                    <h2 className="text-2xl text-center font-bold text-shadow-lg text-gray-800">Login</h2>

                    <div
                        className="mt-6 flex w-fit flex-col gap-5">

                        {
                            stape == 1 ? (
                                <div>
                                    <input
                                        onChange={(e) => { setemail(e.target.value) }}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className='w-[320px] p-3 rounded-md'
                                        placeholder='Email'
                                    />





                                    <div className="relative mt-5">
                                        <input onChange={(e) => { setpassword(e.target.value) }}
                                            type={`${ispassshow ? "text" : "password"}`}
                                            name="password"
                                            id="password"
                                            className='w-[320px] p-3 rounded-md'
                                            placeholder='Password'
                                        />
                                        <div className="absolute right-0">

                                            {
                                                ispassshow ? (
                                                    <FaEyeSlash onClick={() => { setispassshow(false) }} className="text-2xl -translate-y-9 -translate-x-3 cursor-pointer" />
                                                ) : (
                                                    <FaEye onClick={() => { setispassshow(true) }} className="text-2xl -translate-y-9 -translate-x-3 cursor-pointer" />
                                                )
                                            }



                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <input
                                        onChange={(e) => { setotp(e.target.value) }}
                                        type="number"
                                        className='booking-input-field border border-gray-500 p-3 mt-3 w-full rounded-md'
                                        placeholder='Enter 6 Digit OTP Code'
                                    />
                                </div>
                            )
                        }



                        {/* <select onChange={(e) => setrole(e.target.value)} className='booking-input-field p-3 rounded-md'>
                            <option value="Role">Select Category</option>
                            <option value="Register">Register</option>
                            <option value="Client">Client</option>
                            <option value="Photographer">Photographer</option>
                            <option value="Vediographer">Videographer</option>
                        </select> */}



                        <button onClick={() => { stape == 1 ? handlelogin() : stape == 2 && loginotpVerify() }} className="pbg w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                            Login
                        </button>

                        <div className="text-center">
                            <p>
                                Don&#39;t have an Account?
                                <Link className="pcl2 pl-2 underline" href={'/auth/ragester'}>Sign Up</Link>
                            </p>
                            <p>OR</p>
                            <Link href={'/auth/forgetpass'} className="pcl2 underline">Forget Password</Link>
                            {/* <Link href={'/auth/verifieduser'} className="pcl2 underline">Verify User</Link> */}
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </main>
    )
}

export default Login;