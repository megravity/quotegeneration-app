import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    quotes: { type: [Schema.Types.ObjectId], ref: "Quote" },
});

userSchema.indexes({ email: 1 });

const User = model("User", userSchema);

export default User;
