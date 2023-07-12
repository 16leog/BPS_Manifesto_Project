'use client';
import { Inter, Montserrat } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BackButton from '../../../public/back-button.svg';
import SignInSkyline from '../../../public/signin-skyline.svg';

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
      <body className="min-h-screen bg-SIGNIN_BGCOLOR flex flex-col">
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
        <div className="bg-SIGNIN_FORM_BGCOLOR mb-40 justify-center grow mx-5">
          <div className="flex justify-center">
            <form className="m-4">
              <div className={inter.className}>
                <input
                  type="text"
                  className="outline outline-1 rounded mt-8 mx-8 h-12 w-72 "
                  placeholder="Full Name"
                  style={{ paddingLeft: '8px' }}
                />
              </div>
              <div className={inter.className}>
                <input
                  type="text"
                  className="outline outline-1 rounded mt-8 mx-8 h-12 w-72"
                  placeholder="Phone Number"
                  style={{ paddingLeft: '8px' }}
                />
              </div>
              <div className={inter.className}>
                <input
                  type="text"
                  className="outline outline-1 rounded mt-8 mx-8 h-12 w-72"
                  placeholder="Email"
                  style={{ paddingLeft: '8px' }}
                />
              </div>
              <div className={inter.className}>
                <input
                  type="text"
                  className="outline outline-1 rounded mt-8 mx-8 h-12 w-72"
                  placeholder="Emergency Contact Name"
                  style={{ paddingLeft: '8px' }}
                />
              </div>
              <div className={inter.className}>
                <input
                  type="text"
                  className="outline outline-1 rounded mt-8 mx-8 h-12 w-72"
                  placeholder="Emergency Contact Number"
                  style={{ paddingLeft: '8px' }}
                />
              </div>
            </form>
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-SAVE_AND_SIGN_BUTTON_COLOR w-44 h-12 mb-12">
              <h1 className="text-white">
                <a className={inter.className}>Save and Sign</a>
              </h1>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Image
            className="w-full h-1/6"
            src={SignInSkyline}
            alt="SignInSkyline"
          />
        </div>
      </body>
    </html>
  );
}
