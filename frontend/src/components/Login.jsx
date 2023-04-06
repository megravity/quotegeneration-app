import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context.jsx";
import "../styles/Login.css";

const Login = () => {
    const { setUser } = useContext(MyContext);
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios
            .post("http://localhost:4000/users/login", data)
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    console.log(res.headers.token);
                    localStorage.setItem("token", res.headers.token);
                    setUser(res.data.data);
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };
    return (
        <div className="login-container">
            <h2>Log in!</h2>
            <form onSubmit={loginUser}>
                <label>
                    E-Mail 💌 : <input type="email" name="email" />
                </label>
                <label>
                    Password 🔐 : <input type="password" name="password" />
                </label>
                <button type="submit">Log In! 📲</button>
            </form>
        </div>
    );
};
export default Login;
