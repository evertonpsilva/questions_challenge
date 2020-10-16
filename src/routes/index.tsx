import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Loading } from "../components";
import Question from "../pages/question";

const Home = React.lazy(() => import("../pages/home"));

const Routes = () => {
    const history = createBrowserHistory();

    return(
        <Suspense fallback={Loading}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/question" exact>
                        <Question/>
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    );

};

export default Routes;