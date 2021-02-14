import Link from "next/link";
import { Logo } from "components";

function Header(props) {
  return (
    <header className="s-header border-bottom-primary">
      <div className="s-header__container container">
        <div className="s-header__items">
          <div className="s-header__item">
            <Link href="/">
              <a>
                <Logo variant="main" />
              </a>
            </Link>
          </div>
        </div>
        <div className="s-header__items">
          <div className="s-header__item"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
