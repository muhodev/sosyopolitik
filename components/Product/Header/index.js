import Link from "next/link";
import { Logo } from "components";
import items from "./items";

function Header(props) {
  return (
    <header className="s-header">
      <div className="s-header__container container">
        <div className="s-header__items">
          <HeaderLogoItem />
        </div>
        <div className="s-header__items">
          {items.map((item, index) => (
            <HeaderLinkItem
              href={item.link}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

function HeaderLogoItem(props) {
  return (
    <div className="s-header__logo">
      <Link href="/">
        <a>
          <Logo variant="main" />
        </a>
      </Link>
    </div>
  );
}

function HeaderLinkItem(props) {
  return (
    <div className="s-header__item">
      <Link href={props.href}>
        <a>
          <span className="s-header__item--icon">{props.icon}</span>
          <span className="s-header__item--title">{props.title}</span>
        </a>
      </Link>
    </div>
  );
}

function HeaderPopupItem(props) {
  return <div className="s-header__item"></div>;
}

export default Header;
