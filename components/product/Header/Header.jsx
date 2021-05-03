import { Logo, ButtonLink } from 'components';
import { Explore, Home, Lists } from 'components/icons';

export function Header() {
  return (
    <header className="flex items-center text-white c-bg-dark h-14 px-5 shadow-sm">
      <div className=" w-full flex items-center justify-between ">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center">
          <div>
            <ButtonLink href="?login=true">Oturum Aç</ButtonLink>
          </div>
          <div>
            <ButtonLink variant="primary" href="?signup=true">
              Kaydol
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
