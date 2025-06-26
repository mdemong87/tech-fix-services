'use client'

import Container from "@/app/componnent/clientcomponnent/Container";
import Loading from "@/app/componnent/clientcomponnent/Loading";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const VerifyOtp = () => {


    const [otp, setotp] = useState('');
    const [isloading, setisloading] = useState(false);
    const userData = useStore((state) => state.userData);
    const router = useRouter();






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
                    router.push("/auth/forgetpass/verifyotp/changepassword");

                } else {
                    toast.error(res.message);
                }


            } catch (error) {
                toast.error("OTP Verification Failed");
            }
        }
    }













    return (
        <main className="pt-28">
            {isloading && <Loading />}
            <Container>
                <div>
                    <h2 className="text-center text-4xl py-6 font-bold">Verify OTP</h2>

                    <div className="p-7 w-full flex justify-center items-center">
                        <div className="rounded-md border border-gray-300 p-5">
                            <input onChange={(e) => { setotp(e.target.value) }} type="number" className="w-full p-3 rounded-md" placeholder="Your OTP"
                            />

                            <button onClick={() => { varification() }} className="pbg2 w-full p-3 mt-4 text-white font-bold text-xl rounded-md">Verify</button>
                        </div>
                    </div>
                </div>
            </Container>
            <ToastContainer />
        </main>
    )
}

export default VerifyOtp;