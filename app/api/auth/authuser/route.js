import { auth } from "@/lib/auth";
import ConnectDB from "@/lib/connectionDB";
import getUserByEmail from "@/lib/helper/getUserByEmail";

export const GET = async () => {

    try {
        // Initialize DB connection
        ConnectDB();

        const session = await auth();
        const sessionEmail = session?.user?.email;

        // Find the user by email
        const user = await getUserByEmail(sessionEmail);

        const passUserData = {
            uid: user?.uid,
            email: user?.email,
            fullname: user?.fullname,
            role: user?.role,
            isvarified: user?.isvarified,
            createdAt: user?.createdAt,
        };




        return Response.json({
            name: "Auth user Data Fecth Successfully",
            status: 200,
            data: passUserData
        })



    } catch (error) {
        console.error("Error from layout page:", error);


        return Response.json({
            name: "Auth User Data Fetch Failed",
            status: 500,
        })
    }

}