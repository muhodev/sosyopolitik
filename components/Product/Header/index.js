import { Logo, Link, Button } from "components";
import { HeaderNav } from "./HeaderNav";

function Header() {
  return (
    <header className="w-full h-14 bg-white  shadow-sm sticky top-0 left-0 font-medium text-base">
      <div className="container mx-auto h-full">
        <div className="flex h-full justify-between">
          <div className="flex">
            <HeaderLogoItem />
            <HeaderNav />
          </div>
          <div className="md:flex items-center hidden">
            <div className="mr-3">
              <Button>Oturum Aç</Button>
            </div>
            <div>
              <Button>Kayıt Ol</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderLogoItem(props) {
  return (
    <div className="font-serif font-semibold items-center flex mr-5 text-xl md:text-2xl">
      <Link href="/">
        <Logo variant="main" />
      </Link>
    </div>
  );
}

export default Header;
