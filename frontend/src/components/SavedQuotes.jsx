import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context.jsx";
import "../styles/SavedQuotes.css";

const SavedQuotes = () => {
    const { user } = useContext(MyContext);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getQuotes();
    }, [user]);

    const getQuotes = () => {
        if (user) {
            axios
                .get("http://localhost:4000/users/getquotes/" + user._id)
                .then((res) => {
                    const { data } = res.data;
                    setQuotes(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const deleteQuote = async (id) => {
        console.log(id);
    };

    return (
        <div class>
            <h2>Your favorite quotes ❤️</h2>
            <div className="quotes">
                {quotes.map((quote) => {
                    return (
                        <div className="quote" key={quote._id}>
                            <h3>{quote.author}</h3>
                            <p>{quote.text}</p>
                            <button onClick={() => deleteQuote(quote._id)}>
                                Remove from favorites
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default SavedQuotes;
