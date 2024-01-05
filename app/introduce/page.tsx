import IntroduceYourself from '@/app/ui/introduce-form';
import BreadCrumbs from '@/app/ui/breadcrumbs';
import NextButton from '@/app/ui/next-button';
import { getServerSession } from 'next-auth';
import { getIntroduction } from '@/app/lib/actions';


export default async function Introduce(){

    const { name, job_title, bio } = await getIntroduction();

    return(
        <main className="h-full flex-col justify-center items-center container font-light">
            <BreadCrumbs links={["mystuff"]} current="introduce"></BreadCrumbs>
            <NextButton link={"tech"}></NextButton>
            <div className="w-full h-full flex justify-center items-center">
            <IntroduceYourself initialName={name} initialJobTitle={job_title} initialBio={bio}></IntroduceYourself>
            </div>
        </main>
    )
}