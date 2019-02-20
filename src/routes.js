import React from "react";
import { Switch, Route} from "react-router-dom";

//import the components
import Main from "./components/main";
import Signin from "./components/signin";
import Login from "./components/login";
import AddPost from "./components/addPost";

import Auth from "./components/auth/auth";

const Routes = () => (
   
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addpost" component={Auth(AddPost)} />
            
        </Switch>
       
) 

export default Routes;