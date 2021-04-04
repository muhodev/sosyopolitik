import { useAuth } from "context";
import { Logo, ButtonLink } from "components";
import { Explore, Home, Lists } from "components/icons";

export function Header() {
  const { state } = useAuth();
  return (
    <header className="flex justify-center h-14 bg-white  shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <div className="mx-8 flex items-center">
            <div className="flex items-center mr-8">
              <div className="text-gray-800 mr-1 text-xl">
                <Home />
              </div>
              <span>Ana sayfa</span>
            </div>
            <div className="flex items-center mr-8">
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
          {state.user ? (
            <>
              {console.log(state.user)}
              <div>{state.user.username}</div>
              <div>
                <ButtonLink href="/logout">Çıkış Yap</ButtonLink>
              </div>
            </>
          ) : (
            <>
              <div>
                <ButtonLink href="?login=true">Oturum Aç</ButtonLink>
              </div>
              <div>
                <ButtonLink variant="primary" href="?signup=true">
                  Kaydol
                </ButtonLink>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
