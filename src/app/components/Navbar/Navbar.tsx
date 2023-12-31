import { Inter, Old_Standard_TT, Open_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-old-standard-tt',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: '600',
});

export default function Navbar() {
  return (
    <nav
      className="bg-NAVBAR_COLOR text-white w-full top-0 z-10 flex items-center justify-between h-24 px-4 relative shadow-lg"
      id="navbar"
    >
      <div className="absolute left-8 bottom-4">
        <button>
          <div className="flex flex-col justify-center">
            <div className="h-1 w-6 bg-white mb-1"></div>
            <div className="h-1 w-6 bg-white mb-1"></div>
            <div className="h-1 w-6 bg-white"></div>
          </div>
        </button>
      </div>

      <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 flex flex-col items-center sm:left-32 max-sm:text-center">
        <h1 className="text-MANIFESTO_COLOR text-3xl">
          <a className={oldStandard.className}>M</a>
        </h1>
        <p className={openSans.className}>Manifesto</p>
      </div>
    </nav>
  );
}
