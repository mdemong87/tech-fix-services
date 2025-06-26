import Footer from "../componnent/clientcomponnent/Footer";
import Header from "../componnent/clientcomponnent/Header/Header";

const SiteLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default SiteLayout;