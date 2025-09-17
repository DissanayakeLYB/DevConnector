import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <>
            <h1>MainPage</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
    );
}

export default MainPage;
