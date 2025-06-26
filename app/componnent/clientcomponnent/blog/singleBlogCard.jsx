import Image from "next/image";


const SingleBlogCard = ({ title, dis, image, date }) => {
    return (
        <div className="grid gap-5 grid-cols-6 p-5 rounded-md bg-white">
            <div className="col-span-6 lg:col-span-6 w-full">

                <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
                    {
                        image?.map((item, index) => {
                            return (

                                <div key={index} className="h-[400px] w-full">
                                    <Image className="rounded-md object-cover object-top w-full h-full" src={item} alt="blog-image" width={1000} height={1000} />
                                </div>

                            )
                        })

                    }
                </div>

            </div>
            <div className="col-span-6 lg:col-span-6 w-full">
                <p className="text-gray-500 text-base pb-3">{date}</p>
                <h2 className="text-2xl text-gray-900">{title}</h2>
                <p className="text-gray-500 pt-3 text-base">
                    {dis}
                </p>
            </div>
        </div>
    )
}

export default SingleBlogCard;