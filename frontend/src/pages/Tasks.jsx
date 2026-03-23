import { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/task.service";
import { getWorkspaces } from "../services/workspace.service";
import "./Tasks.css";

const Tasks = () => {

    const [tasks,setTasks] = useState([]);
    const [workspaces,setWorkspaces] = useState([]);

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [workspace,setWorkspace] = useState("");

    useEffect(()=>{
        loadTasks();
        loadWorkspaces();
    },[]);

    const loadTasks = async ()=>{
        const data = await getTasks();
        setTasks(data);
    };

    const loadWorkspaces = async ()=>{
        const data = await getWorkspaces();
        setWorkspaces(data);
    };

    const handleCreate = async ()=>{

        if(!title.trim() || !workspace){
            alert("Please enter a title and select a workspace.");
            return;
        }

        await createTask({
            title,
            description,
            workspace
        });

        setTitle("");
        setDescription("");

        loadTasks();
    };

    return(

        <div className="tasks-container">
          <div className="tasks-card">

            <h2 className="tasks-title">Create Task</h2>

            <div className="tasks-form">
              <input
                  placeholder="Title"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
              />

              <input
                  placeholder="Description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
              />

              <select
                  value={workspace}
                  onChange={(e)=>setWorkspace(e.target.value)}
              >
                <option value="">Select Workspace</option>
                {workspaces.map(w=>(
                    <option key={w._id} value={w._id}>
                    {w.name}
                    </option>
                ))}
              </select>

              <button onClick={handleCreate}>
                   Create Task
              </button>
            </div>

            <hr className="tasks-divider"/>

            <h2 className="tasks-list-title">Tasks</h2>

            <ul className="tasks-list">
                {tasks.map(task=>(
                    <li key={task._id} className="tasks-list-item">
                        <b>{task.title}</b>
                        <p>{task.description}</p>
                        <p>Status: {task.status}</p>
                    </li>
                ))}
            </ul>

          </div>
        </div>

    );
};

export default Tasks;