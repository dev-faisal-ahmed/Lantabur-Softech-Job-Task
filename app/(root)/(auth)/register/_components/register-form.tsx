"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { serverAddress } from "@/utils/server-address";
import { serverRequest } from "@/utils/server-request";

export function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.target as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const name = formData.name.value.trim();
    const email = formData.email.value;
    const password = formData.password.value;

    try {
      setLoading(true);
      const url = `${serverAddress}/api/register`;
      const response = await fetch(url, serverRequest("POST", { name, email, password }));
      const data = await response.json();

      if (!data.ok) return toast.error(data.message);
    } catch (err) {
      toast.error(JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-3 bg-white p-8 rounded-md shadow-md">
      <h1 className="text-center font-semibold text-xl text-blue-950">Welcome, Register Here</h1>
      <hr />
      <Input title="Name" type="text" name="name" placeholder="Input Your Name" required />
      <Input title="Email" type="email" name="email" placeholder="Input Your Email" required />
      <Input
        title="Password"
        type="password"
        name="password"
        placeholder="Input A Strong Password"
        required
      />

      <Button disabled={loading} className="mt-3">
        Register
      </Button>
      <p className="text-sm text-center mt-3">
        Already have an account?{" "}
        <Link className="underline text-blue-700" href={"/login"}>
          Login
        </Link>
      </p>
    </form>
  );
}
