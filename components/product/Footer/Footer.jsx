import { Link, Card } from "components";

const data = [
  {
    title: "Hakkında",
    slug: "/about",
  },
  {
    title: "Gizlilik Politikası",
    slug: "/privacy",
  },
  {
    title: "Çerez Politikası",
    slug: "/fos",
  },
  {
    title: "Hizmet Şartları",
    slug: "/fos",
  },
];

export function Footer(props) {
  return (
    <footer className="w-full">
      <Card>
        <div className="flex items-start flex-wrap text-gray-700">
          {data.map((item, index) => (
            <div className="mr-4 mb-2 text-sm" key={index}>
              <Link href={item.slug}>{item.title}</Link>
            </div>
          ))}
        </div>
      </Card>
    </footer>
  );
}
