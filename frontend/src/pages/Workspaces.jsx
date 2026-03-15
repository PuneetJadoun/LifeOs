import { useEffect, useState } from "react";
import { getWorkspaces, createWorkspace } from "../services/workspace.service";
import "./Workspaces.css";

export default function Workspaces(){

    const [workspaces,setWorkspaces] = useState([]);
    const [name,setName] = useState("");

    const loadWorkspaces = async () => {
        const data = await getWorkspaces();
        setWorkspaces(data);
    };

    const handleCreate = async () => {

        if(!name) return;

        await createWorkspace(name);

        setName("");

        loadWorkspaces();
    };

    useEffect(()=>{
        loadWorkspaces();
    },[]);

    return(

        <div className="workspaces-container">
          <div className="workspaces-card">

            <h2 className="workspaces-title">Workspaces</h2>

            <div className="workspaces-form">
              <input
                  placeholder="Workspace name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
              />

              <button onClick={handleCreate}>
                   Create Workspace
              </button>
            </div>

            <hr className="workspaces-divider"/>

            <ul className="workspaces-list">
                {workspaces.map(w=>(
                <li key={w._id} className="workspaces-list-item">{w.name}</li>
                ))}
            </ul>

          </div>
        </div>

    );

}