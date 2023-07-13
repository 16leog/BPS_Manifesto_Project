'use client';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ManifestoBanner from '../../public/manifesto-banner.svg';
import { signinList } from './common/SigninList';
import NoOne from './components/Homescreen/NoOne';

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter',
});

signinList;

export default function Home() {
  const router = useRouter();
  const storedFormData = localStorage.getItem('formData');
  const formData = storedFormData ? JSON.parse(storedFormData) : null;
  const fullName = formData ? formData.fullName : '';
  return (
    <html lang="en" className="sm:scroll-smooth">
      <body className="min-h-screen bg-HOMEPAGE_BGCOLOR">
        <div className="">
          <Image
            className="w-full mt-9"
            src={ManifestoBanner}
            alt="ManifestoBanner"
          />
        </div>
        <NoOne />
        <div className="text-white">{fullName}</div>
        <div className="flex justify-center mt-44">
          <button
            onClick={() => router.push('/signin')}
            className="bg-MANIFESTO_COLOR w-44 h-12"
          >
            <h1 className="text-NAVBAR_COLOR">
              <a className={inter.className}>Sign In</a>
            </h1>
          </button>
        </div>
      </body>
    </html>
  );
}
