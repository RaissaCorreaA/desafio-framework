import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Posts from "./pages/Posts/index";
import Albuns from "./pages/Albuns/index";
import ToDos from "./pages/ToDos/index";

let router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/albuns" component={Albuns} />
      <Route path="/to-dos" component={ToDos} />
      <Redirect from ="*" to="/"/>
        
    </Switch>
  );
};
export default router;
