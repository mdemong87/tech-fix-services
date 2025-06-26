import Image from "next/image";
import Link from "next/link";
import { FaImages } from "react-icons/fa";

const ImageCard = ({ data, link }) => {



    return (
        <Link href={link} className="border shadow-xl col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 h-fit rounded-md cursor-pointer cardHover">
            <div className="w-full">
                <div className="w-full rounded-t-md cardimagecomponnentImageWrper">

                    <Image src={data?.file[0]} width={1000} height={1000} className="rounded-t-md h-[250px] object-cover cardImageForHoverEffect" alt="image" />


                </div>
                <div className="p-3 bg-white rounded-b-md">
                    <p className="text-gray-400 text-md">{data?.Eventdate}</p>
                    <h3 className="text-gray-600 font-semibold text-xl line-clamp-1">{data?.title}</h3>
                    <p className="line-clamp-1">
                        <b className="pcl font-semibold">By</b>
                        <span className="text-md text-gray-400 pl-1">{data?.fullname}</span>
                    </p>
                    <div className="mt-4">
                        <div className="flex gap-3 items-center">

                            <div className="flex gap-3 px-2 py-1 rounded-md items-center pbg3">
                                <FaImages className="text-xl text-gray-500" />
                                <span className="text-gray-500 text-lg font-semibold">{data?.file?.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ImageCard;