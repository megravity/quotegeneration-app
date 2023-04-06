import Quote from "../models/QuoteSchema.js";
import User from "../models/UserSchema.js";

export const favoriteQuote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { content, author } = req.body;

        let quote = await Quote.findOne({ text: content });

        if (!quote) {
            quote = await Quote.create({
                text: content,
                author: author,
            });
        }

        const user = await User.findById(id);

        if (!user.quotes.includes(quote._id)) {
            await User.findByIdAndUpdate(id, { $push: { quotes: quote._id } });
        }

        res.json({
            success: true,
            data: quote,
        });
    } catch (err) {
        next(err);
    }
};
