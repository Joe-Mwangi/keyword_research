import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { search } = await req.json();

  if (!search) {
    return new NextResponse("search required", { status: 400 });
  }
  const [braveRes, bingRes, googleRes, ecosiaRes, duckRes] = await Promise.all([
    axios.get(`https://search.brave.com/api/suggest?q=${search}`),
    axios.get(`https://api.bing.com/osjson.aspx?query=${search}`),
    axios.get(
      `https://www.google.com/complete/search?q=${search}&client=firefox`
    ),
    axios.get(`https://ac.ecosia.org/?q=${search}`),
    axios.get(`https://duckduckgo.com/ac/?q=${search}`),
  ]);

  const res = {
    bing: bingRes.data[1],
    brave: braveRes.data[1],
    google: googleRes.data[1],
    ecosia: ecosiaRes.data.suggestions,
    duck: duckRes.data.map((item: any) => item.phrase),
  };
  return NextResponse.json(res);
}
