import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  console.log(cookieStore.get("email"), "my cookies");
  return (
    <main>
      <h1>Hi Test APP</h1>
    </main>
  );
}
