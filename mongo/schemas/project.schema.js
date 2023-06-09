import { Schema, model } from "mongoose";

const ProjectSchema = new Schema({
    name: String,
    duration: Number,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'Users',
    }],
});

const Project = model("Projects", ProjectSchema);

export default Project;