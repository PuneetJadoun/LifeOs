import Workspace from "../models/Workspace.js";


/* create all workspaces    */

export const createWorkspace = async (req, res) => {
    try{
        const {name} = req.body;
        const workspace = await Workspace.create({
            name,
            user: req.user.id
        })
        res.status(201).json(workspace);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};


/* get all workspaces    */
export const getWorkspaces = async (req, res) =>{
    try{
        const workspaces = await Workspace.find({user: req.user.id});
        res.status(200).json(workspaces);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};


/* get specific workspaces    */
export const updateWorkspace = async (req,res)=>{
try{
    const { id } = req.params;
    const { name } = req.body;

    const workspace = await Workspace.findByIdAndUpdate(
    id,
    { name },
    { new:true }
    );

    res.json(workspace);

    }catch(error){
        res.status(500).json({message:error.message});
    }
};

/* delete specific workspace    */
export const deleteWorkspace = async (req, res) =>{
    
    try{

    const { id } = req.params;

    await Workspace.findByIdAndDelete(id);

    res.json({message:"Workspace deleted"});

    }catch(error){
        res.status(500).json({message:error.message});
    }
};
