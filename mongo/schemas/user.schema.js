import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number
    },
    location: {
        type: String
    },
    skills: [String],
    salary: {
        type: Number 
    }
});

const User = model("Users", UserSchema);

export default User;