import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

type Props = {
  data: [];
  loading: boolean;
  title: string;
};
export const ResultCard: React.FC<Props> = ({ data, loading, title }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          data.map((item, i) => <p key={i}>{item}</p>)
        )}
      </CardContent>
    </Card>
  );
};
