import React, { useContext } from 'react'
import { ContextUser } from '../Context/ContextUser'
import { Navigate } from 'react-router-dom';

const ProtectedAuth = ({children}) => {
    const {currentUser} = useContext(ContextUser);
    if(!currentUser){
        return <Navigate to={'/login'} replace/>
    }
  return children;
}

export default ProtectedAuth