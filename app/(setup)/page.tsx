import { currentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";

export default async function SetupPage() {
  const logined = await currentUser();

  if (!logined) {
    return redirect("/sign-in");
  }

  return <main></main>;
}
