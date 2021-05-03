import { Card, Button } from "components";

export function PostsTitleWidget(props) {
  return (
    <Card>
      <header className="inline-flex items-center text-gray-700">
        <div className="">
          <Button variant="secondary">Popüler</Button>
        </div>
        <div className="">
          <Button>Taze Çıkanlar</Button>
        </div>
        <div className="">
          <Button>Takip Ettiklerin</Button>
        </div>
      </header>
    </Card>
  );
}
