import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email address"],
        unique: true,
        // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        trim: true
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    phone: {
        type: Number,
        required: [true, "Please provide a phone number"],
        match: /^\+?1?\d{10}$/,
        trim: true
    },
    long: {
        type: Number,
        min: -180,
        max: 180
    },
    lat: {
        type: Number,
        min: -90,
        max: 90
    }
}
);

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
