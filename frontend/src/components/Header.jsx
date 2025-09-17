function Header(props) {
    return (
        <nav className="flex flex-row justify-between items-center p-5 px-10 bg-blue-50">
            <a href="/" className="text-3xl font-extralight">
                DevConnector
            </a>
            <ul className="flex flex-row gap-6 text-lg ">
                <li>
                    <a
                        href={props.pageName === "login" ? "/register" : "/login"}
                        className="hover:underline underline-offset-8 cursor-pointer"
                    >
                        {props.pageName === "login" ? "Register" : "Login"}
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
