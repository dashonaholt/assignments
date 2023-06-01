import React from "react"
import {Navigate} from 'react-router-dom'

export default function ProtectedRoute(props) {
    const {token, redirectTo, children} = props;

    return token ? children : <Navigate to ={redirectTo} /> 
    
    
}
// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute(props) {
//   const { token, redirectTo, children } = props;

//   if (token) {
//     return <>{children}</>;
//   } else {
//     return <Navigate to={redirectTo} replace={true} />;
//   }
// }
