import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => { // Corrected 'childern' to 'children'
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    
    if (loading) {
        return <div>
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }
    
    if (user) {
        return children;
    }
    
    return <Navigate state={location.pathname} to='/login' />;
};

export default PrivateRoute;
