import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="flex flex-row justify-between items-center p-5 px-10 ">
            <Link to="/" className="text-3xl font-extralight">
                DevConnector
            </Link>
            <ul className="flex flex-row gap-6 text-lg ">
                <li>
                    <Link to="/login" className="hover:underline underline-offset-8 cursor-pointer">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
