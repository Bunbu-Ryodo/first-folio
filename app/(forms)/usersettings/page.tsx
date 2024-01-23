import { getServerSession } from "next-auth";
import ChangeEmailForm from "@/app/ui/user-settings/change-email-form";
import ChangePasswordForm from "@/app/ui/user-settings/change-password-form";

export default async function UserSettings() {
  const session = await getServerSession();
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <ChangeEmailForm session={session}></ChangeEmailForm>
      <ChangePasswordForm></ChangePasswordForm>
    </div>
  );
}
