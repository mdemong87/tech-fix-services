import AuthUserUpdater from "../componnent/AuthUserUpdater";
import HomeSlider from "../componnent/clientcomponnent/HomeSlider";
import Location from "../componnent/clientcomponnent/Location";
import WhatWeRepair from "../componnent/clientcomponnent/WhatWeRepair";
import WhyChooseUs from "../componnent/clientcomponnent/WhyChooseUs";




const Home = async () => {


  return (
    <main className="h-fit">
      <AuthUserUpdater />
      <HomeSlider />
      <WhyChooseUs />
      <WhatWeRepair />
      <Location />
    </main>
  )
}
export default Home;