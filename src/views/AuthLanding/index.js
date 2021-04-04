import { useState } from "react";
import { Signup, Login } from "components";

export default function AuthLanding() {
  const [type, setType] = useState("signup");

  return (
    <div className="w-screen flex items-center h-screen justify-center">
      <div className="w-4/12 bg-white p-7 rounded-md shadow-md border">
        {type === "signup" ? (
          <Signup switchType={(newType) => setType(newType)} />
        ) : type === "login" ? (
          <Login switchType={(newType) => setType(newType)} />
        ) : null}
      </div>
    </div>
  );
}
