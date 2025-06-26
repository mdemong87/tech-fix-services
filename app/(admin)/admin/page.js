import Container from "@/app/componnent/clientcomponnent/Container";
import Link from "next/link";

const Admin = () => {
    return (
        <main className="pt-28 pb-6">
            <Container>
                <div className="py-5 min-h-screen flex justify-center items-center">
                    <div>
                        <h3 className="text-center text-2xl font-bold">Welcome to the Admin Dashboard</h3>

                        <div className="flex justify-center items-center mt-[100px]">
                            <Link href={'/admin/booking'} className="pbg p-2 text-gray-100">Go to Booking Page</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Admin;