import Link from "next/link";

const RequestForServiceBtn = () => {
    return (
        <Link className='pbg2 rounded-md text-lg font-medium p-3 text-white hover:bg-yellow-700 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer' href={"/"}>Request for Service</Link>
    )
}

export default RequestForServiceBtn;