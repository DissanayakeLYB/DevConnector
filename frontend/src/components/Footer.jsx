import React from "react";

function Footer() {
    return (
        <div className="flex font-normal justify-center items-center h-16 text-black ">
            <p>
                {new Date().getFullYear()} DevConnector | Created by{" "}
                <a href="https://lasith.site" target="_blank" className="underline underline-offset-4 ">
                    Lasith
                </a>
                &nbsp;✌️
            </p>
        </div>
    );
}

export default Footer;
