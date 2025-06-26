'use client'

import { useStore } from "@/lib/store";
import { useEffect } from "react";


function AuthUserUpdater() {
    const authUser = useStore((state) => state.authUser);
    const setauthUser = useStore((state) => state.setauthUser);




    useEffect(() => {


        async function fetchAuthUser() {
            const authuser = await fetch('/api/auth/authuser');
            const session = await authuser.json();

            if (session?.data) {
                setauthUser(session.data);
            }

        }

        fetchAuthUser();

    }, []);




    return;

}

export default AuthUserUpdater;