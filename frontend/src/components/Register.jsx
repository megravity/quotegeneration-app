import axios from "axios";
import "../styles/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
    const registerUser = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios.post("http://localhost:4000/users/signup", data).then((res) => {
            console.log(res);
        });
    };
    return (
        <div className="register-container">
            <h2>Sign Up!</h2>
            <form onSubmit={registerUser}>
                <label>
                    E-Mail 💌 : <input type="email" name="email" />
                </label>
                <label>
                    Password 🔐 : <input type="password" name="password" />
                </label>
                <button type="submit">Sign Up! ☝️</button>
            </form>
            <Link to="/login">Already signed up? Log in here ☺️</Link>
        </div>
    );
};
export default Register;
