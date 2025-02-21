import mongoose, { mongo, Schema, Model } from "mongoose";
import IPerson from "../types/person";

const PersonSchema: Schema<IPerson> = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    zip: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    adhesion: {
        date: { type: Date, required: true },
        payment: {
            hasPaid: { type: Boolean, required: true },
            date: { type: Date, required: true },
            method: { type: String, required: true },
            intentId: { type: String, required: true }
        }
    }
});

const AdhesionModel: Model<IPerson> = mongoose.model("adhesion", PersonSchema, "adhesion");

export default AdhesionModel;
