import { getServerSession } from 'next-auth';
import SubmitButton from '@/app/ui/SubmitButton';
import ChangeEmailForm from '@/app/ui/change-email-form';
import ChangePasswordForm from '@/app/ui/change-password-form';




export default async function UserSettings(){
    const session = await getServerSession();
    return(
        <div className="md:mt-24 flex flex-col flex-1 justify-center md:flex-row md:items-center w-full">
            <ChangeEmailForm session={session}></ChangeEmailForm>
            <ChangePasswordForm></ChangePasswordForm>
        </div>
    )
}