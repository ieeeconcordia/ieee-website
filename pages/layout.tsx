import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <main className=''>
          <Navbar />
          <div className=''>{children}</div>
          <Footer />
        </main>
  );
}
