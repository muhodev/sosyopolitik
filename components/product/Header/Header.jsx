import { Logo, Link } from 'components';
import items from './items.json';

export function Header() {
  return (
    <header className="flex items-center h-14 px-5 shadow-sm c-bg-secondary sticky top-0 left-0 z-50">
      <div className=" w-full flex items-center justify-between ">
        <div className="flex items-center">
          <Logo />
          <div className="hidden md:flex items-center mx-4">
            {items.map((item, index) => (
              <Link href={item.link} key={index}>
                <span className="px-2">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
