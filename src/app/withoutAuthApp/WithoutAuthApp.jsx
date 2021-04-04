import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppLayout, Header } from "components";

const AuthLanding = lazy(() => import("views/AuthLanding"));

export function WithoutAuthApp() {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={AuthLanding} />
          </Switch>
        </Suspense>
      </AppLayout>
    </Router>
  );
}
