import items from "./items";
import Link from "./HeaderNavLink";

export function HeaderNav() {
  return (
    <nav className="grid grid-cols-3 h-full justify-items-center items-center">
      {items.map((item, index) => (
        <Link href={item.link} key={index}>
          <span className="inline-flex items-center px-3">
            <span className="inline-flex items-center px-2 text-gray-800 text-lg">
              {item.icon}
            </span>
            <span className="hidden md:flex">{item.title}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
