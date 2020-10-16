import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Loading } from "../components";

const Categories = React.lazy(() => import("../pages/categories"));
const Question = React.lazy(() => import("../pages/question"));

const Routes = () => {
    const history = createBrowserHistory();

    return(
        <Suspense fallback={Loading}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact>
                        <Categories/>
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