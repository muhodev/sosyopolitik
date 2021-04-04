import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppLayout, Header } from "components";

const Home = lazy(() => import("views/Home"));
const Lists = lazy(() => import("views/Lists"));
const Explore = lazy(() => import("views/Explore"));
const Logout = lazy(() => import("views/Logout"));

export function AuthApp() {
  return (
    <Router>
      <AppLayout>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/lists" component={Lists} />
            <Route path="/explore" component={Explore} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </AppLayout>
    </Router>
  );
}
