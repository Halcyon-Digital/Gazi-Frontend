import Footer from '@/components/footer';
import TopHeader from '@/components/header';
import MegaMenu from '@/components/megamenu';
import Navbar from '@/components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <MegaMenu />
      {children}
      <Footer />
    </div>
  );
}
