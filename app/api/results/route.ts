import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { search } = await req.json();

  if (!search) {
    return new NextResponse("search required", { status: 400 });
  }

  const braveRes = await axios.get(
    `https://search.brave.com/api/suggest?q=${search}`
  );
  const bingRes = await axios.get(
    `https://api.bing.com/osjson.aspx?query=${search}`
  );
  const res = {
    bing: bingRes.data[1],
    brave: braveRes.data[1],
  };
  return NextResponse.json(res);
}
