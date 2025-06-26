import BlogCard from "@/app/componnent/clientcomponnent/blog/BlogCard";
import Container from "@/app/componnent/clientcomponnent/Container";
import replaceSpaceWithUnderscore from "@/lib/helper/spacetounderscore";
import BlogData from "../../../data/BlogsData";

const Blogs = () => {
    return (
        <main className="h-fit pt-36 pb-14">
            <Container>

                <div className={`grid grid-cols-12 items-center gap-5 w-full h-fit`}>


                    {
                        BlogData?.map((item, index) => {
                            return (
                                <BlogCard key={index} link={replaceSpaceWithUnderscore(item.title)} title={item.title} dis={item.dis} file={item.file} date={item?.date} />
                            )
                        })
                    }




                </div>
            </Container>
        </main>
    )
}

export default Blogs;