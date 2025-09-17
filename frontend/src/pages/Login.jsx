import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Header pageName="login" />
            <main className="flex flex-col m-auto min-w-xl p-10 rounded-4xl bg-blue-50">
                <h1 className="text-3xl font-bold mb-10">Login</h1>
                <div className="flex flex-col mb-6">
                    <label className="text-lg font-medium">Email</label>
                    <input className="font-normal focus:outline-none" type="email" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col mb-6">
                    <label className="text-lg font-medium">Password</label>
                    <input className="font-normal focus:outline-none" type="password" placeholder="Enter your password" />
                </div>
                <button className="text-xl bg-blue-500 text-white py-3 rounded-lg cursor-pointer">Login</button>
                <div className="mt-6 text-center">
                    <p>
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline underline-offset-6">
                            Register here
                        </Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Login;
