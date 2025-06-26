'use client'


import Container from "@/app/componnent/clientcomponnent/Container";
import Loading from "@/app/componnent/clientcomponnent/Loading";
import { SendOTPviaEmail } from "@/lib/helper/SendOTP";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPass = () => {

    const [via, setvia] = useState("Email");
    const [email, setemail] = useState("");
    const [isloading, setisloading] = useState(false);
    const router = useRouter();
    const userData = useStore((state) => state.userData);
    const setuserData = useStore((state) => state.setuserData);



    //handle verify email with 6 digit code
    async function sendotp() {


        if (email != "") {


            setisloading(true);

            try {


                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/forgetpass`, {
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
                            router.push('/auth/forgetpass/verifyotp');
                            toast.success(res.message);
                            setuserData(res?.data?.alluserData);

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













    return (
        <main className="pt-28">
            {
                isloading && <Loading />
            }
            <Container>
                <div>
                    <h2 className="text-center text-4xl py-6 font-bold">Forget Password</h2>

                    <div className="p-7 w-full flex justify-center items-center">
                        <div className="rounded-md border border-gray-300 p-5">
                            <input onChange={(e) => { setemail(e.target.value) }} type="email" className="w-full p-3 rounded-md" placeholder="Enter your Email"
                            />

                            <button onClick={() => { sendotp() }} className="pbg2 w-full p-3 mt-4 text-white font-bold text-xl rounded-md">Get OTP</button>
                        </div>
                    </div>
                </div>
            </Container>
            <ToastContainer />
        </main>
    )
}

export default ForgetPass;