'use client'


import { useStore } from "@/lib/store";
import Link from "next/link";
import { useState } from "react";


const Navber = ({ setshownav }) => {

    const [islogin, setislogin] = useState(false);
    const authUser = useStore((state) => state.authUser);


    return (
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/"}>Home</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/portfolio"}>About Us</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/booking"}>Services</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/booking"}>Blogs</Link>
            <Link onClick={() => { setshownav(false) }} className='pbg2 rounded-md text-base font-medium p-3 text-white' href={"/watch"}>Request for Service</Link>

        </nav>
    )
}


export default Navber;