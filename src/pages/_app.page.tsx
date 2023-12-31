import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import { AppContextProvider } from '@/contexts/AppContext';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`w-screen h-screen bg-neutral-950 text-white ${inter.className}`}
    >
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  );
}
