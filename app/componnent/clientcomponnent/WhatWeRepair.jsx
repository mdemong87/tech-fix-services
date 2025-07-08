import Container from "./Container";
import WhatWeRepairCard from "./WhatWeRepairCard";

const WhatWeRepair = () => {
    return (
        <section className="bg-white py-7 md:py-16">
            <Container>
                <div>
                    <div>
                        <h2 className="text-4xl font-bold">What We Repair - For Homes Like Yours</h2>
                        <p className="py-8 text-lg">
                            No matter the appliance issue, we&apos;re here to fix it! Our expert technicians specialize in repairing a wide range of washing machines and refrigerators, ensuring your home runs smoothly again.
                        </p>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-8">
                        <WhatWeRepairCard />
                        <WhatWeRepairCard />
                        <WhatWeRepairCard />
                        <WhatWeRepairCard />
                        <WhatWeRepairCard />
                        <WhatWeRepairCard />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WhatWeRepair;