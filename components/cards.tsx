import { Results } from "@/types";
import { ResultCard } from "./single-card";

type Props = {
  data: Results;
  loading: boolean;
};

export const Cards: React.FC<Props> = ({ data, loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  w-full">
      <ResultCard data={data.google} loading={loading} title="Google" />

      <ResultCard data={data.bing} loading={loading} title="Bing" />
      <ResultCard data={data.duck} loading={loading} title="DuckDuckGo" />

      <ResultCard data={data.brave} loading={loading} title="Brave" />
      <ResultCard data={data.yahoo} loading={loading} title="Yahoo" />

      <ResultCard data={data.ecosia} loading={loading} title="Ecosia" />
      <ResultCard data={data.yandex} loading={loading} title="Yandex" />
    </div>
  );
};
