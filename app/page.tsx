"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function submitForm(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setData([]);
    try {
      const res = await axios.post("/api/results", { search });
      console.log(res.data);
      setData(res.data.data[1]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h2 className="text-2xl font-bold text-primary">Search Your Keyword</h2>

      <form onSubmit={submitForm} className="h-12 flex gap-4 ">
        <Input
          id="search"
          value={search}
          onChange={onChange}
          className="pl-10 pr-2 w-full h-full py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
          placeholder="Search"
        />
        <Button type="submit" disabled={loading} className="max-w-sm">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
        </Button>
      </form>

      <div className="flex flex-col gap-4 items-center">
        {data.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </main>
  );
}
