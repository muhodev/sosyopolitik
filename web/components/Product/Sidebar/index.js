import Link from "next/link";
import { Logo } from "components";
import items from "./items";
import { Maximize2 } from "components/Icons";

function Sidebar(props) {
  return (
    <aside className="s-sidebar">
      <div className="s-sidebar__container">
        <div className="s-sidebar__items">
          <SidebarLogoItem>
            <Logo variant="main" />
          </SidebarLogoItem>
        </div>
        <div className="sidebar__items">
          {items.map((item, index) => (
            <SidebarLinkItem
              key={index}
              href={item.link}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <SidebarPopupItem
            title="Daha Fazla"
            icon={<Maximize2 />}
          ></SidebarPopupItem>
        </div>
      </div>
    </aside>
  );
}

function SidebarLogoItem(props) {
  return (
    <div className="s-sidebar__item s-sidebar__item--logo">
      <Link href="/home">
        <a>{props.children}</a>
      </Link>
    </div>
  );
}

function SidebarLinkItem(props) {
  return (
    <div className="s-sidebar__item">
      <Link href={props.href}>
        <a>
          <span className="s-sidebar__item--icon">{props.icon}</span>
          <span className="s-sidebar__item--title">{props.title}</span>
        </a>
      </Link>
    </div>
  );
}

function SidebarPopupItem(props) {
  return (
    <div className="s-sidebar__item">
      <div className="d-flex align-items-center">
        <span className="s-sidebar__item--icon">{props.icon}</span>
        <span className="s-sidebar__item--title">{props.title}</span>
      </div>
      <div className="s-sidebar__item--popup"></div>
    </div>
  );
}

export default Sidebar;
