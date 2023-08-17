import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SyncLoader from "react-spinners/SyncLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <SyncLoader color='#FF0000' />;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
