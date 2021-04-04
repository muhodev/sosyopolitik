import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from "aws-amplify";

import { AppLayout } from "components";
import { useAuth } from "context";

const Home = lazy(() => import("../views/Home"));
const Lists = lazy(() => import("../views/Lists"));
const Explore = lazy(() => import("../views/Explore"));
const Logout = lazy(() => import("../views/Logout"));

export function App() {
  const { setUser } = useAuth();
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(
      (user) => {
        setUser(user);
      },
      (error) => alert(error.message)
    );
  }, []);
  return (
    <Router>
      <AppLayout>
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
