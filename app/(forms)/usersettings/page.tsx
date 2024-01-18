import { getServerSession } from "next-auth";
import ChangeEmailForm from "@/app/ui/user-settings/change-email-form";
import ChangePasswordForm from "@/app/ui/user-settings/change-password-form";

export default async function UserSettings() {
  const session = await getServerSession();
  return (
    <div className="md:mt-24 flex flex-col flex-1 justify-center md:flex-row md:items-center w-full">
      <ChangeEmailForm session={session}></ChangeEmailForm>
      <ChangePasswordForm></ChangePasswordForm>
    </div>
  );
}
