import Header from "@/app/componnent/admin/Header/Header";
import Footer from "@/app/componnent/clientcomponnent/Footer";


const AdminLayout = ({ children }) => {

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )


}

export default AdminLayout;