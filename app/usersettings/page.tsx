import { getServerSession } from 'next-auth';
import SubmitButton from '@/app/ui/SubmitButton';
import ChangeEmailForm from '@/app/ui/change-email-form';



export default async function UserSettings(){
    const session = await getServerSession();
    console.log(session, "Session");
    return(
        <div className="flex flex-col justify-center md:flex-row md:items-center w-full h-full ">
            <ChangeEmailForm session={session}></ChangeEmailForm>
            <div className="flex flex-col w-full md:w-1/2">
                <div className="flex flex-col justify-center w-full text-monokaiYellow text-displayMobile md:text-header font-medium text-center p-2 h-headerBanner mb-titleHeader"><span className="opacity-0 animate-fade-in-slower">Change Your Password</span></div>
            </div>
        </div>
    )
}