import { FaCartPlus } from "react-icons/fa";

import Link from "next/link";

const UserToggleNav = ({ toggleController }) => {
    return (
        <div onClick={() => { toggleController(false) }}>
            <Link className="flex items-center p-2 gap-2 hover:underline transition duration-300" href={'/my-cart'}>
                <FaCartPlus className="text-2xl" />
                <span className="text-xl font-semibold">View Cart</span>
            </Link>
        </div>
    )
}

export default UserToggleNav;