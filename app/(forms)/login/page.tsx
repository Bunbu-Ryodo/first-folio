import LoginForm from "@/app/ui/login/login-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();
  if (session) {
    redirect("/mystuff");
  }

  return (
    <main className="h-full flex justify-center items-center container font-light">
      <LoginForm />
    </main>
  );
}
