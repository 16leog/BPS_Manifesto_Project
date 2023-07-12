import { Inter, Montserrat } from 'next/font/google';

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

export default function NoOne() {
  return (
    <div className="mt-36">
      <h1 className="text-white text-center text-2xl">
        <a className={montserrat.className}>No one is currently signed in.</a>
      </h1>
      <h1 className="text-white text-center text-2xl">
        <a className={montserrat.className}>Be the first to sign in.</a>
      </h1>
    </div>
  );
}
