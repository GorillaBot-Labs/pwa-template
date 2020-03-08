import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";

import UserContext from "../../contexts/UserContext";

const AuthenticatedRoute = (props) => {
    const {user} = useContext(UserContext);

    if (user) {
        return <Route {...props} />
    } else {
        return <Redirect to="/login"/>
    }
};

export default AuthenticatedRoute;
