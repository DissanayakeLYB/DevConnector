import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Header />
            <main className="flex flex-col m-auto min-w-sm p-10 rounded-3xl bg-blue-50">
                <h1 className="text-3xl mb-7 text-center">Log In</h1>
                <div className="flex flex-col mb-6">
                    <input
                        className="text-md font-normal focus:outline-none pb-2 border-b-1 border-gray-500"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="flex flex-col mb-6">
                    <input
                        className="text-md font-normal focus:outline-none pb-2 border-b-1 border-gray-500"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button className="text-md bg-blue-500 text-white font-normal py-3 rounded-lg cursor-pointer">Login</button>
                <div className="mt-6 text-center text-md font-normal">
                    <p>
                        Don't have an account?{" "}
                        <Link to="/signup" className=" text-blue-500 hover:underline underline-offset-6">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Login;
