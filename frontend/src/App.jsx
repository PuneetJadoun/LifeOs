import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Workspaces from "./pages/Workspaces";
import Tasks from "./pages/Tasks";

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

    return(
        <BrowserRouter>
            <LowercaseRedirect />
            <Routes>
                {/* Public routes */}
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>

                {/* Protected routes */}
                <Route
                    path="/dashboard"
                    element={
                    <ProtectedRoute>
                    <Dashboard/>
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/workspaces"
                    element={
                    <ProtectedRoute>
                    <Workspaces/>
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/tasks"
                    element={
                    <ProtectedRoute>
                    <Tasks/>
                    </ProtectedRoute>
                    }
                />

                {/* Redirect unknown routes to login */}
                <Route path="*" element={<Navigate to="/login" replace />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

