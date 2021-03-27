import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppLayout } from "components";

const Home = lazy(() => import("../views/Home"));
const Lists = lazy(() => import("../views/Lists"));
const Explore = lazy(() => import("../views/Explore"));

export function App() {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/lists" component={Lists} />
            <Route path="/explore" component={Explore} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </AppLayout>
    </Router>
  );
}
