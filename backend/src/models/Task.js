import mongoose from "mongoose";

// This is task Schema 
const TaskSchema = new mongoose.Schema(
{
    title:{
        type: String,
        required: true,
    },

    description:{
        type: String,
    },

    status:{
        type: String,
        enum: ["todo", "in-progress", "done"], 
        default: "todo"
    },

    workspace:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Workspace",
        required: true
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
},

{timestamps: true}

);

export default mongoose.model("Task", TaskSchema);
