import axios from "axios";
import { useContext, useState } from "react";
import { MyContext } from "../context/Context.jsx";
import { Link } from "react-router-dom";
import "../styles/Quote.css";

const Quote = () => {
    const [quote, setQuote] = useState(null);
    const { user } = useContext(MyContext);

    const generateQuote = async () => {
        try {
            const { data } = await axios.get("https://api.quotable.io/random");

            if (data) {
                setQuote(data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const favoriteQuote = async () => {
        try {
            if (quote && user) {
                console.log(quote);
                const { data } = await axios.post(
                    "http://localhost:4000/quotes/" + user._id,
                    quote
                );
                if (data.success) {
                    generateQuote();
                }
            }
        } catch (error) {}
    };

    return user ? (
        <div className="quote-container">
            <h2>{quote && quote.author}</h2>
            <p>{quote && quote.content}</p>
            <button onClick={generateQuote}>Get a Quote</button>
            {quote && <button onClick={favoriteQuote}>Favorite</button>}
        </div>
    ) : (
        <div className="quote-container">
            <h3>You need to be logged in to generate quotes 🫠</h3>
            <Link to="/signup">Click here to sign up or log in</Link>
        </div>
    );
};
export default Quote;
