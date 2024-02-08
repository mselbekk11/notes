import { Button } from '@/components/ui/button';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect('/dashboard');
  }
  return (
    <section className='flex bg-background h-[90vh]'>
      <div className='relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12'>
        <div className='max-w-3xl mx-auto text-center animate-slideFromDownAndFade mt-8'>
          <div>
            <span className='w-auto px-6 py-3 rounded-full bg-secondary'>
              <span className='text-sm font-medium text-primary'>
                Sort your notes easily
              </span>
            </span>

            <h1 className='mt-8 text-3xl font-extrabold tracking-tight lg:text-5xl'>
              Create Notes with Ease
            </h1>
            <p className='max-w-xl mx-auto mt-8 text-base lg:text-xl text-muted-foreground'>
              Dive into a streamlined note-taking experience designed to
              declutter your mind and workspace.
            </p>
          </div>
          <div className='flex justify-center max-w-sm mx-auto mt-10'>
            <RegisterLink>
              <Button size='lg' className='w-full'>
                Sign Up for free
              </Button>
            </RegisterLink>
          </div>
        </div>

        <div className='mx-auto text-center anchor home animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]'>
          <Image
            className='hero-image'
            alt='Notes App'
            src='/Dark-half.png'
            width={900}
            height={703}
          />
        </div>
      </div>
    </section>
  );
}
