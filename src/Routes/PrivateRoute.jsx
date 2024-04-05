import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {Navigate, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location=useLocation();
    if(loader){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoute.propTypes={
    children:PropTypes.node
}

export default PrivateRoute;