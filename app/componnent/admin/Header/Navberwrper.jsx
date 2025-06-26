'use client'

import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Navber from "./Navber";

const NavberWrper = () => {


    const [shownav, setshownav] = useState(false);


    return (
        <div className="">
            <div className="hidden md:block">
                <Navber setshownav={setshownav} />
            </div>
            <div className="flex w-full jutify-end items-center md:hidden">
                <HiMiniBars3BottomRight onClick={() => setshownav(true)} className="text-3xl text-white cursor-pointer" />
            </div>

            {
                shownav && <div className="block md:hidden absolute w-screen bannartransparentBg h-screen top-0 left-0 flex">
                    <div className="pbg w-[400px] py-4 px-4">
                        <div className="flex justify-end pb-12">
                            <div onClick={() => setshownav(false)} className="pbg2 p-2 rounded-md cursor-pointer hover:rotate-180 transition duration-500">
                                <RxCross2 className="text-white text-2xl" />
                            </div>
                        </div>
                        <Navber setshownav={setshownav} />
                    </div>
                    <div className="w-full">
                    </div>
                </div>
            }
        </div>
    )
}

export default NavberWrper;