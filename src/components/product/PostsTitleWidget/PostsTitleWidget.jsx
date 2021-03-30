import { Card } from "components";

export function PostsTitleWidget(props) {
  return (
    <Card>
      <header className="flex items-center text-gray-700">
        <div className="rounded-3xl bg-gray-100 px-3 py-1 tex-center mr-4 font-medium">
          Popüler
        </div>
        <div className="rounded-3xl  px-3 py-1 tex-center mr-4">En son</div>
        <div className="rounded-3xl px-3 py-1 tex-center">Takip Ettiklerin</div>
      </header>
    </Card>
  );
}
