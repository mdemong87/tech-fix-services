import Image from "next/image";
import Link from "next/link";


const BlogCard = ({ link, title, dis, file, date }) => {
    return (

        <Link href={`/blogs/${link}`} className="border shadow-xl col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 h-fit rounded-md cursor-pointer cardHover w-full">
            <div className="w-full">
                <div className="w-full rounded-t-md cardimagecomponnentImageWrper">

                    <Image src={file[0]} width={1000} height={1000} className="rounded-t-md h-[250px] object-cover object-top cardImageForHoverEffect" alt="image" />


                </div>
                <div className="p-3 bg-white rounded-b-md">
                    <h3 className="text-gray-600 font-semibold text-xl line-clamp-1">{title}</h3>
                    <p className="line-clamp-2 text-md text-gray-400">
                        {
                            dis
                        }
                    </p>
                    <p className="text-gray-400 text-md pt-1">{date}</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;