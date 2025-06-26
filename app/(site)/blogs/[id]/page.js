import SingleBlogCard from "@/app/componnent/clientcomponnent/blog/singleBlogCard";
import Container from "@/app/componnent/clientcomponnent/Container";
import replaceSpaceWithUnderscore from "@/lib/helper/spacetounderscore";
import Link from "next/link";
import BlogData from "../../../../data/BlogsData";


const SingleBlogsPage = ({ params }) => {




    //current selete id
    const id = params?.id;


    //filter out the current data
    const singledata = BlogData?.filter((items) => {

        const singleItem = replaceSpaceWithUnderscore(items.title);
        return singleItem == id;
    })


    return (
        <main className="py-28">
            <Container>
                <div className="grid grid-cols-12 gap-5">

                    <div className="col-span-12 lg:col-span-8 w-full h-fit text-white rounded-md flex flex-col gap-5">
                        <SingleBlogCard title={singledata[0]?.title} dis={singledata[0]?.dis} image={singledata[0]?.file} date={singledata[0].date} />

                    </div>


                    <aside className="col-span-12 md:col-span-4 w-full bg-white text-white rounded-md h-full p-5">
                        <div className="">
                            <h2 className="text-3xl font-semibold text-gray-800">Related Blogs Post:</h2>
                            <div className="mt-[25px] overslog">






                                {
                                    BlogData.map((item, index) => {
                                        return (
                                            <div key={index} className="my-[10px] text-gray-600">
                                                <Link href={`/blogs/${replaceSpaceWithUnderscore(item.title)}`} className="w-fit h-fit">
                                                    <div className="bg-[#e4edd9] rounded-md p-2">
                                                        <h3 className="text-xl font-semibold line-clamp-1">
                                                            {
                                                                item.title
                                                            }
                                                        </h3>
                                                        <p className="line-clamp-2 text-gray-500 text-sm">
                                                            {
                                                                item.dis
                                                            }
                                                        </p>
                                                        <span className="line-clamp-1 text-gray-500 text-sm">{item?.date}</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }



                            </div>
                        </div>
                    </aside>


                </div>


            </Container>
        </main>
    )
}

export default SingleBlogsPage;