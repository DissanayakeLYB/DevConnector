import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Register() {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Header pageName="register" />
            <main className="flex flex-col m-auto min-w-xl p-10 rounded-4xl bg-blue-50">
                <h1 className="text-3xl font-bold mb-10">Register</h1>
                <div className="flex flex-col mb-6">
                    <label className="text-lg font-medium">Username</label>
                    <input className="font-normal focus:outline-none" type="text" placeholder="Enter your username" />
                </div>
                <div className="flex flex-col mb-6">
                    <label className="text-lg font-medium">Email</label>
                    <input className="font-normal focus:outline-none" type="email" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col mb-6">
                    <label className="text-lg font-medium">Password</label>
                    <input className="font-normal focus:outline-none" type="password" placeholder="Enter your password" />
                </div>
                <div className="flex flex-col mb-6">
                    <label className="text-lg font-medium">Confirm Password</label>
                    <input className="font-normal focus:outline-none" type="password" placeholder="Retype your password" />
                </div>
                <button className="text-xl bg-blue-500 text-white py-3 rounded-lg cursor-pointer">Create Account</button>
                <div className="mt-6 text-center">
                    <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline underline-offset-6">
                            Login here
                        </Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Register;
