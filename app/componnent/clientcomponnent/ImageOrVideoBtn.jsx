'use client'

import { FaImage, FaVideo } from "react-icons/fa";


const ImageOrVideoBtn = ({ isImage, setisImage }) => {
    return (
        <div className="flex justify-between md:justify-end items-center mb-6 gap-8 w-full">
            <button onClick={() => { setisImage(true) }} className={`flex items-center text-[#343a40] gap-5 border border-gray-300 p-3 rounded-md hover:bg-[#7AA140] hover:text-white duration-500 ${isImage && "bg-[#7AA140] text-white"}`}>
                <div>
                    <FaImage className='text-2xl' />
                </div>
                <div>
                    <p className='text-base'>Image</p>
                </div>
            </button>
            <button onClick={() => { setisImage(false) }} className={`flex items-center text-[#343a40] gap-5 border border-gray-300 p-3 rounded-md hover:bg-[#7AA140] hover:text-white duration-500 ${isImage === false && "bg-[#7AA140] text-white"}`}>
                <div>
                    <FaVideo className='text-2xl' />
                </div>
                <div>
                    <p className='text-base'>Video</p>
                </div>
            </button>
        </div >
    )
}

export default ImageOrVideoBtn;