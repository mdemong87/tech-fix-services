'use client'
import Loading from "@/app/componnent/clientcomponnent/Loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AdminLogin = () => {


    const router = useRouter();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [isloading, setisloading] = useState(false);
    const [ispassshow, setispassshow] = useState(false);






    //handle handlelogin function here
    async function handlelogin() {





        if (email !== '' || password !== '') {

            setisloading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/nahid`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    role: "Admin"
                })

            })

            const res = await response.json();

            setisloading(false);
            setemail('');
            setpassword('');

            if (res.success) {
                toast.success(res.message);
                setTimeout(() => {

                    //redirect to dashboard page
                    router.push("/admin");
                }, 500);
            } else {
                toast.error(res.message);
            }

        } else {
            toast.error("Enter All Flied");
        }



    }



    return (
        <main className="h-screen w-screen">
            {isloading && <Loading />}
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="border border-2 border-gray-300 p-8 rounded-md h-fit w-fit">
                    <h2 className="text-2xl text-center font-bold text-shadow-lg text-gray-800">Admin Login</h2>

                    <div
                        className="mt-6 flex flex-col gap-5">

                        <input
                            onChange={(e) => { setemail(e.target.value) }}
                            type="email"
                            name="email"
                            id="email"
                            className='booking-input-field p-3 rounded-md'
                            placeholder='Email'
                        />


                        <div className="relative">
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


                        <button onClick={() => { handlelogin() }} className="pbg w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                            Admin Login
                        </button>

                        {/* <div className="text-center">
                        
                            <Link href={'/auth/forgetpass'} className="pcl2 underline">Forget Password</Link>
                        </div> */}

                    </div>
                </div>
            </div>
            <ToastContainer />
        </main>
    )
}

export default AdminLogin;