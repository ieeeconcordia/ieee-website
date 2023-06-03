import Navbar from '../components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <main className='px-16'>
          <Navbar />
          <div className='px-20'>{children}</div>
          
        </main>
  );
}
