import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Hero Section */}
            <main className="flex-grow  bg-blue-100 flex items-center justify-center p-10">
                <h1 className="text-5xl font-light text-gray-800">Welcome to DevConnector</h1>
            </main>

            <Footer />
        </div>
    );
}

export default MainPage;
