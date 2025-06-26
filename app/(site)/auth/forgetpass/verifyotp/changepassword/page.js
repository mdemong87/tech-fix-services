'use client'

import Container from "@/app/componnent/clientcomponnent/Container";
import Loading from "@/app/componnent/clientcomponnent/Loading";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {



    const [pass, setpass] = useState('');
    const [conpass, setconpass] = useState('');
    const router = useRouter();
    const [isloading, setisloading] = useState(false);
    const userData = useStore((state) => state.userData);



    const changgePass = async () => {
        if (pass == conpass) {

            setisloading(true);

            try {

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/varifieduser/varifiedotp/changepass`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        pass,
                        userData
                    })

                });
                const res = await response.json();
                setisloading(false);

                if (res.success) {

                    toast.success(res.message);

                    setTimeout(() => {
                        router.push("/auth/login");
                    }, 1000);

                } else {
                    toast.error(res.message);
                }


            } catch (error) {
                toast.error("Password Does Not Update");
            }


        } else {
            toast.warn("Password Does Not Match");
        }
    }




    return (
        <main className="pt-28">
            {
                isloading && <Loading />
            }
            <Container>
                <div>
                    <h2 className="text-center text-4xl py-6 font-bold">Change Password</h2>

                    <div className="p-7 w-full flex justify-center items-center">
                        <div className="rounded-md border border-gray-300 p-5">
                            <input onChange={(e) => { setpass(e.target.value) }} type="text" className="w-full p-3 rounded-md" placeholder="Enter New Password" />

                            <input onChange={(e) => { setconpass(e.target.value) }} type="text" className="w-full p-3 mt-4 rounded-md" placeholder="Confirm New Password" />

                            <button onClick={() => { changgePass() }} className="pbg2 w-full p-3 mt-4 text-white font-bold text-xl rounded-md">Change Password</button>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default ChangePassword;