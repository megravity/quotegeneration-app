import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../context/Context.jsx";
import "../styles/Navbar.css";

const Navbar = () => {
    const { user } = useContext(MyContext);

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {!user && (
                    <li>
                        <NavLink to="/signup">Sign Up / Log In</NavLink>
                    </li>
                )}
                {user && (
                    <li>
                        <NavLink to="/savedquotes">Saved Quotes</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};
export default Navbar;
