'use client'


import Link from "next/link";
import { useState } from "react";



const Navber = ({ setshownav }) => {

    const [islogin, setislogin] = useState(false);




    return (
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/admin/booking"}>Dashboard</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/admin/booking"}>Blogs</Link>
        </nav>
    )
}


export default Navber;