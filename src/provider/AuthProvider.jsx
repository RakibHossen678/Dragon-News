import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const AutInfo={user}
    return (
        <AuthContext.Provider value={AutInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children:PropTypes.node
}

export default AuthProvider;