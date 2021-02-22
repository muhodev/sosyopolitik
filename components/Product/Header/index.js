import { Logo, Link, Grid, Flex, Button } from "components";
import items from "./items";

function Header(props) {
  return (
    <header className="s-header">
      <div className="s-header__container container">
        <Flex height="100%">
          <Flex>
            <HeaderLogoItem />
          </Flex>
          <Grid
            height="100%"
            justifyContent="center"
            gridTemplateColumns="repeat(3,auto)"
          >
            {items.map((item, index) => (
              <HeaderLinkItem
                href={item.link}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </Grid>
        </Flex>
        <Flex>
          <Button>Oturum Aç</Button>
          <Button>Kayıt Ol</Button>
        </Flex>
      </div>
    </header>
  );
}

function HeaderLogoItem(props) {
  return (
    <Flex alignItems="center">
      <div className="s-header__logo">
        <Link href="/">
          <Logo variant="main" />
        </Link>
      </div>
    </Flex>
  );
}

function HeaderLinkItem(props) {
  return (
    <div className="s-header__item">
      <Link href={props.href}>
        <span className="s-header__item--link">
          <span className="s-header__item--icon">{props.icon}</span>
          <span className="s-header__item--title">{props.title}</span>
        </span>
      </Link>
    </div>
  );
}

function HeaderPopupItem(props) {
  return <div className="s-header__item"></div>;
}

export default Header;
