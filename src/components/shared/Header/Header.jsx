import { Logo } from "components";
import { UnauthNav } from "./UnauthNav";

export function Header(props) {
  return (
    <header className="h-14 flex items-center justify-center shadow-sm">
      <div className="container flex justify-between items-center">
        <Logo />
        <UnauthNav />
      </div>
    </header>
  );
}
