import { Logo, ButtonLink } from 'components';
import { Explore, Home, Lists } from 'components/icons';

export function Header() {
  return (
    <header className="flex items-center h-14 px-5 shadow-sm c-bg-secondary sticky top-0 left-0">
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
