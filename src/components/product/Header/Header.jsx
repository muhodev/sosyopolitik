import { Logo } from "components";
import { Explore, Home, Lists } from "components/icons";

export function Header(props) {
  return (
    <header className="flex justify-center h-14 bg-white  shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <div className="ml-6 flex items-center">
            <div className="flex items-center mr-6">
              <div className="text-gray-800 mr-1 text-xl">
                <Home />
              </div>
              <span>Ana sayfa</span>
            </div>
            <div className="flex items-center mr-6">
              <div className="text-gray-800 mr-1 text-xl">
                <Explore />
              </div>
              <span>Keşfet</span>
            </div>
            <div className="flex items-center">
              <div className="text-gray-800 mr-1 text-xl">
                <Lists />
              </div>
              <span>Listeler</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div>Oturum Aç</div>
          <div>Kaydol</div>
        </div>
      </div>
    </header>
  );
}
