import { Logo, ButtonLink, Button } from 'components';
import { useAuth } from 'providers';

export function Header() {
  const { state, logout } = useAuth();
  const { isLoggedIn, user } = state;
  return (
    <header className="flex items-center h-14 px-5 shadow-sm c-bg-secondary sticky top-0 left-0 z-50">
      <div className=" w-full flex items-center justify-between ">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center">
          {isLoggedIn && user.username ? (
            <>
              <div>
                <ButtonLink variant="primary" href="/yeni-yazi">
                  Yeni Yazı
                </ButtonLink>
              </div>
              <div className="ml-5">
                <ButtonLink variant="subtle" href={`/profil/${user?.username}`}>
                  Profil
                </ButtonLink>
              </div>
              <div className="ml-5">
                <Button variant="subtle" onClick={() => logout()}>
                  Çıkış yap
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <ButtonLink href="/login">Oturum Aç</ButtonLink>
              </div>
              <div>
                <ButtonLink variant="primary" href="/signup">
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
