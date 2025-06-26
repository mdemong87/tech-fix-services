'use client'


import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from "react-share";

const ShareWrper = () => {

    const [url, seturl] = useState('');

    useEffect(() => {

        const currentUrl = window.location.href;

        console.log(currentUrl);
        seturl(currentUrl);
    }, [])



    return (
        <div className="flex w-fit px-5 items-center gap-3">


            <FacebookShareButton url={url}>
                <div className="p-3 pbg2 rounded-full cursor-pointer">
                    <FaFacebookF className="text-xl text-white" />
                </div>

            </FacebookShareButton>


            <div className="p-3 pbg2 rounded-full cursor-pointer">
                <FaInstagram className="text-xl text-white" />
            </div>

            <LinkedinShareButton url={url}>
                <div target="Blank" className="p-3 pbg2 rounded-full cursor-pointer">
                    <FaLinkedinIn className="text-xl text-white" />
                </div>
            </LinkedinShareButton>


            <TwitterShareButton url={url}>
                <div target="Blank" className="p-3 pbg2 rounded-full cursor-pointer">
                    <FaTwitter className="text-xl text-white" />
                </div>
            </TwitterShareButton>



        </div>
    )
}

export default ShareWrper;