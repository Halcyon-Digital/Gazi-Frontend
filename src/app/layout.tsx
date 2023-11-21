import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import { Poppins } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import ReduxProvider from '@/redux/provider';
import TopHeader from '@/components/header';
import Navbar from '@/components/navbar';
import MegaMenu from '@/components/megamenu';
import { API_URL } from '@/constant';
import { HomeApiResponse } from '@/types/home';
import Footer from '@/components/footer';

const Gotham = localFont({
  src: [
    {
      path: '../fonts/Gotham-Book.otf',
      weight: '400',
      style: 'book',
    },
    {
      path: '../fonts/Gotham-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/Gotham-Thin.otf',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../fonts/Gotham-Bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../fonts/Gotham-Light.otf',
      weight: '300',
      style: 'light',
    },
  ],
  variable: '--font-gotham',
  preload: true,
});

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poppins',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Gazi Home Appliance',
  description: 'Generated by create next app',
};

async function getData() {
  const res = await fetch(`${API_URL}/home-page`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalData: HomeApiResponse = await getData();
  return (
    <html lang="en">
      <body className={`${Gotham.variable} ${poppins.variable}`}>
        <ReduxProvider>
          <TopHeader homeData={globalData.homePage} />
          <Navbar />
          <MegaMenu menus={globalData.category} />
          {children}
          <Footer globalData={globalData} />
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
