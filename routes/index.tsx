import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home"));

const Routes = () => {
    const history = createBrowserHistory();

    return(
        <Suspense fallback={<div></div>}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    );

};

export default Routes;