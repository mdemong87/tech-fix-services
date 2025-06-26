import AuthUserUpdater from "../componnent/AuthUserUpdater";
import HomeSlider from "../componnent/clientcomponnent/HomeSlider";
import Location from "../componnent/clientcomponnent/Location";
import WhyChooseUs from "../componnent/clientcomponnent/WhyChooseUs";




const Home = async () => {


  return (
    <main className="h-fit">
      <AuthUserUpdater />
      <HomeSlider />
      <WhyChooseUs />
      <Location />
    </main>
  )
}
export default Home;