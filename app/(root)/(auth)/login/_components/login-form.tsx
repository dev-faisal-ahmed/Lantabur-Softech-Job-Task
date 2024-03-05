"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { serverAddress } from "@/utils/server-address";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement & {
      email: { value: string };
    };

    const email = formData.email.value;

    try {
      setLoading(true);
      const url = `${serverAddress}/api/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Accept-Content": "Application/Json" },
        body: JSON.stringify({ email }),
      });
      await response.json();
      router.push("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleLogin}>
      <Input title="Input Email" name="email" placeholder="Input Your Email" type="email" required />
      {loading ? <p>Wait bro</p> : <Button>Submit</Button>}
      <p>Form Cookies : </p>
    </form>
  );
}
