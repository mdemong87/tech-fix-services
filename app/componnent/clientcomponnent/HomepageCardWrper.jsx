'use client'

import SearchLogic from "@/lib/helper/SearchLogic";
import replaceSpaceWithUnderscore from "@/lib/helper/spacetounderscore";
import { useStore } from "@/lib/store";
import Container from "./Container";
import ImageCard from "./imageCard";

const HomePageCardWrper = ({ data, fromPage }) => {



    const searchText = useStore((state) => state.searchText);
    const setsearchText = useStore((state) => state.setsearchText);
    const filterData = SearchLogic(data, searchText);









    return (
        <div className="pt-[195px] md:pt-[135px] lg:pt-[30px]">
            <Container>
                {
                    fromPage == "home" && <h1 className="text-3xl font-bold text-gray-900 pb-8">Expolor Best Photos:</h1>
                }

                <div className={`grid ${fromPage == "home" ? "grid-cols-12" : "grid-cols-9"} items-center gap-5`}>



                    {
                        filterData?.map((singleCard, index) => {
                            return (
                                <ImageCard key={index} data={singleCard} link={`/${replaceSpaceWithUnderscore(singleCard?.fullname)}`} />

                            )
                        })
                    }

                </div>
                {/* <div className="mt-10 flex justify-center items-center">
                    <Link href={'/searchresult'} className="w-fit pbg text-white py-3 px-5 rounded-md cursor-pointer">View All</Link>
                </div> */}
            </Container>
        </div>
    )
}

export default HomePageCardWrper;