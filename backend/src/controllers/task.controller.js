import Task from "../models/Task.js";

// create task

export const createTask = async (req, res)=>{
    try{
        const {title , description, workspace} =  req.body;
        const task = await Task.create({
            title,
            description,
            workspace,
            user: req.user.id
        });

        res.status(201).json(task);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

// User should be able to see there own task only

export const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({
            user: req.user.id
        }).populate("workspace","name");

        res.json(tasks);

    }catch(error){
        res.status(500).json({message:error.message});
    }
};


// Update task

export const updateTask = async (req, res)=>{
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            id, 
            req.body,
            { returnDocument: "after" }
        );
        res.json(task);
    }
    catch{
        res.status(500).json({message:error.message});
    }
};


// delete task

export const deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        await Task.findByIdAndDelete(id);
        res.json({message:"Task deleted"});
    }
    catch{
        res.status(500).json({message:error.message});
    }
};

