import "./styles/App.css";
import Quote from "./components/Quote.jsx";
import Navbar from "./components/Navbar.jsx";
import SavedQuotes from "./components/SavedQuotes.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <h1>Quote App</h1>
                <Routes>
                    <Route path="/" element={<Quote />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/savedquotes" element={<SavedQuotes />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
