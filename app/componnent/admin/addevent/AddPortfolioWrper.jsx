'use client'


import ConvartMediaToBase64 from "@/lib/helper/convartMediaToBase64";
import { useStore } from "@/lib/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../clientcomponnent/Loading";

function AddPortfolioWrper() {


    const router = useRouter();


    const [catagory, setcatagory] = useState('');
    const [title, settitle] = useState('');
    const [dis, setdis] = useState('');
    const [type, settype] = useState("Select Event Type");
    const [file, setfile] = useState([]);
    const [isloading, setisloading] = useState(false);

    const authUser = useStore((state) => state.authUser);

    //handle handlepostaevent function here
    async function handlepostaevent() {


        setisloading(true);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/addportfolio`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                user: authUser,
                catagory,
                title,
                type,
                dis,
                file
            })

        })

        const res = await response.json();

        setisloading(false);
        setcatagory('');
        settitle('');
        setdis('');
        setfile('');

        if (res.success) {
            toast.success(res.message);
            setTimeout(() => {
                router.push("/admin");
            }, 500);
        } else {
            toast.error(res.message);
        }

    }




    return (
        <div className="pt-24">
            {isloading && <Loading />}
            <h2 className="text-3xl font-bold text-center pt-8">Add Portfolio</h2>
            <div className='w-full grid grid-cols-1 gap-5'>

                <div className="flex flex-col gap-2">
                    <label htmlFor="portfoliocatagory">Portfolio Category:</label>
                    <select value={catagory} onChange={(e) => { setcatagory(e.target.value) }} className="booking-input-field p-3 rounded-md" name="portfoliocatagory" id="portfoliocatagory">
                        <option value="Select Portfolio Category">Select Portfolio Category</option>
                        <option value="headshorts">Headshorts</option>
                        <option value="beauty">Beauty</option>
                        <option value="fashion">Fashion</option>
                        <option value="editorial">Editorial</option>
                        <option value="children">Children</option>
                        <option value="fitness">Fitness</option>
                    </select>

                </div>


                <div className="flex flex-col gap-2">
                    <label htmlFor="EventTitle">Portfolio Title:</label>
                    <input
                        onChange={(e) => { settitle(e.target.value) }}
                        type="text"
                        value={title}
                        name="EventTitle"
                        id="EventTitle"
                        className='booking-input-field p-3 rounded-md'
                        placeholder='Portfolio Title'
                    />

                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="EventTitle">Portfolio Type:</label>
                    <select value={type} onChange={(e) => { settype(e.target.value) }} className="booking-input-field p-3 rounded-md" name="EventType" id="EventType">
                        <option value="Select Event Type">Select Event Type</option>
                        <option value="Image">Image</option>
                        <option value="Video">Video</option>
                    </select>

                </div>


                <div className="flex flex-col gap-2">
                    <label htmlFor="eventDiscription">Portfolio Discriptions:</label>
                    <textarea
                        onChange={(e) => { setdis(e.target.value) }}
                        name="eventDiscription"
                        id="eventDiscription"
                        cols="30"
                        rows="5"
                        value={dis}
                        className='booking-input-field p-3 rounded-md'
                        placeholder='Portfolio Discriptions:'
                    >
                    </textarea>
                </div>


                <div className="flex flex-col gap-2">
                    <label htmlFor="EventImageofVideo">Portfolio Image or Video:</label>
                    <input
                        onChange={(e) => { ConvartMediaToBase64(e, file, setfile) }}
                        type="file"
                        name="EventImageofVideo"
                        id="EventImageofVideo"
                        className='booking-input-field border border-gray-400  p-3 rounded-md'
                        placeholder='Portfolio Image or Video'
                    />

                </div>

                <div className="flex items-centener gap-5">
                    {
                        file.length > 0 && (
                            file?.map((singleFile, index) => {
                                return (

                                    <Image key={index} src={singleFile} className="w-[160px] border-2 border-green-300 rounded-md h-[160px] object-cover" width={1000} height={1000} alt="Image" />

                                )
                            })
                        )
                    }
                </div>

                <button onClick={() => { handlepostaevent() }} className="pbg2 mt-5 px-10 py-3 w-fit text-center text-xl font-semibold text-white rounded-md">Post a Portfolio</button>

            </div>
        </div>
    )
}

export default AddPortfolioWrper;