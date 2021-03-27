import { Link } from "components";

import items from "./items";
import { Widget } from "../Widget";

export function Footer(props) {
  return (
    <Widget>
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div className="mr-4 text-sm mb-2" key={index}>
            <Link href={item.href} key={index}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </Widget>
  );
}
