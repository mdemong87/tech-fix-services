import Image from "next/image";
import cardImage from "../../../public/assets/homeappliece-1.jpg";


const WhatWeRepairCard = () => {
    return (
        <div className="border rounded-md bg-yellow-50 shadow-md hover:shadow-lg hover:bg-yellow-100 transition-all duration-300 cursor-pointer ">
            <div>
                <Image className="rounded-t-md" src={cardImage} alt="Card-Image" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold pb-3 pt-1">Air Conditionar (AC) Repairs</h3>
                <p className="text-gray-600 text-md">Whether your refrigerator is not cooling, has a faulty thermostat, or makes unusual noises, we provide expert solutions. From single-door to built-in models, we ensure your fridge works efficiently again.</p>
            </div>
        </div>
    )
}

export default WhatWeRepairCard;