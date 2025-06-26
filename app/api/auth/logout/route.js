import { signOut } from "@/lib/auth";


export const POST = async () => {

    try {

        await signOut({
            redirect: false
        });

        //response back to the frontend
        return Response.json({
            message: "Sign Out Successfull",
            status: 200,
            success: true
        })

    } catch (err) {
        //response back to the frontend
        return Response.json({
            message: "There is a server side Error",
            status: 500,
            success: false
        })
    }


}