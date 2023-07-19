'use client';
import { Inter, Montserrat } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BackButton from '../../../public/back-button.svg';
import manifestoSignInSkyline from '../../../public/manifestoSignInSkyline.svg';
import SignInSkyline from '../../../public/signin-skyline.svg';
import SigninForm from '../components/signinForm/signinForm';

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-montserrat',
});

export default function SignIn() {
  const router = useRouter();
  return (
    <html lang="en" className="sm:scroll-smooth">
      <body className="max-h-screen bg-SIGNIN_BGCOLOR flex flex-col">
        <div>
          <button onClick={() => router.back()}>
            <div className="flex items-center ml-4 mt-4">
              <Image src={BackButton} alt="BackButton" />
              <span className="ml-2 font-medium text-MANIFESTO_COLOR font">
                <a className={montserrat.className}>Back</a>
              </span>
            </div>
          </button>
        </div>
        <div className=" bg-SIGNIN_FORM_BGCOLOR md:w-[676px] mx-auto flex-grow flex flex-col items-center justify-end shadow-xl z-10">
          <div className="  max-h-[886px] mx-auto">
            <SigninForm />
          </div>
        </div>

        <div className="absolute bottom-0 w-full flex-shrink-0 block sm:hidden">
          <Image
            className="w-full h-1/6"
            src={SignInSkyline}
            alt="SignInSkyline"
          />
        </div>
        <div className="absolute bottom-0 w-full flex-shrink-0 z-0 hidden sm:block">
          <Image
            className="w-full h-1/6"
            src={manifestoSignInSkyline}
            alt="SignInSkyline"
          />
        </div>
      </body>
    </html>
  );
}
