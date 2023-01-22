"use client";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState<User[] | undefined>();
  useEffect(() => {
    fetch("api/hello").then(async (res) => {
      console.log(res);
      res.json().then((res) => setResult(res.users));
    });
  }, []);

  console.log();
  return (
    <div>
      hello
      {result && result?.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
