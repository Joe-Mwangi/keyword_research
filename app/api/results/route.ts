import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { search } = await req.json();

  if (!search) {
    return new NextResponse("search required", { status: 400 });
  }

  const res = await axios.get(
    `https://search.brave.com/api/suggest?q=${search}`
  );

  return NextResponse.json({ data: res.data });
}
