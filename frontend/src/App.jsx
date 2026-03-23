import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Workspaces from "./pages/Workspaces";
import Tasks from "./pages/Tasks";

import LandingPage from "./pages/LandingPage";

// Redirects any uppercase URL to its lowercase version
function LowercaseRedirect() {
    const { pathname, search, hash } = useLocation();
    const lower = pathname.toLowerCase();
    if (pathname !== lower) {
        return <Navigate to={lower + search + hash} replace />;
    }
    return null;
}


function App(){

    return (
        
        <LandingPage />
    );
}

export default App;

