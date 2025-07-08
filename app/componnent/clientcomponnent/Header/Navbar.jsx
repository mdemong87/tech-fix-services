'use client'


import { useStore } from "@/lib/store";
import Link from "next/link";
import { useState } from "react";
import RequestForServiceBtn from "../RequestForServiceBtn";


const Navber = ({ setshownav }) => {

    const [islogin, setislogin] = useState(false);
    const authUser = useStore((state) => state.authUser);


    return (
        <nav className='flex flex-col md:flex-row items-center justi gap-5 md:justify-between'>

            <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-8 md:pl-40">
                <Link onClick={() => { setshownav(false) }} className='text-lg font-medium text-white' href={"/"}>Home</Link>
                <Link onClick={() => { setshownav(false) }} className='text-lg font-medium text-white' href={"/portfolio"}>About Us</Link>
                <Link onClick={() => { setshownav(false) }} className='text-lg font-medium text-white' href={"/booking"}>Services</Link>
                <Link onClick={() => { setshownav(false) }} className='text-lg font-medium text-white' href={"/booking"}>Blogs</Link>
            </div>
            <RequestForServiceBtn />

        </nav>
    )
}


export default Navber;