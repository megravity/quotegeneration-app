import { Schema, model } from "mongoose";

/* 
  "_id": "adyIVFoWB",
  "content": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "author": "Thomas Edison",
  "tags": [
    "inspirational"
  ],
  "authorSlug": "thomas-edison",
  "length": 109,
  "dateAdded": "2020-09-05",
  "dateModified": "2020-09-05"
 */

const quoteSchema = new Schema({
    text: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    tags: [String],
});

quoteSchema.indexes({ text: 1 });

const Quote = model("Quote", quoteSchema);

export default Quote;
