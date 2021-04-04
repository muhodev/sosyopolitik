import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

import { useAuth } from "context";
import { WithoutAuthApp, AuthApp } from "app";

export function App() {
  const { setUser, state } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(
      (user) => {
        setUser(user);
        setLoading(false);
      },
      (error) => setLoading(false)
    );
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!state.user) {
    return <WithoutAuthApp />;
  }
  return <AuthApp />;
}
