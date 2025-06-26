import Image from "next/image";
import Link from "next/link";

const SingleSlide = ({ image, index }) => {


    return (
        <div className='relative'>
            <Image className={`w-full md:h-full object-cover bannerSlideImage`} src={image} width={1000} height={1000} alt="Banner-Image" />
            <div className='absolute h-full w-full top-0 flex items-center justify-center bannartransparentBg'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-3xl text-white font-bold pb-5'>
                        24/7 Home Appliance Repair in Doha, Qatar</h1>
                    <p className='text-md  text-gray-200'>Fast, reliable, and budget-friendly appliance repair services designed for your convenience! </p>
                    <p className='text-md text-gray-200 mt-2'>
                        Don&apos;t let a broken appliance ruin your day. Get it fixed today with our professional technicians.
                    </p>
                    <div className='mt-6 md:mt-12'>
                        <Link href={'/watch'} className='pbg2 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Request for Service</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleSlide;