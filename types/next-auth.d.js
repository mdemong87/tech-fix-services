import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface User {
        id: Number
        name: String
        email: string
        role: string
    }

    interface Session {
        user: User & DefaultSession["user"]
        expires: string
        error: string
    }
}