import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/cards/EventCard';
import { SimpleBtn } from '@/components/buttons/SimpleBtn';

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
          {/* <EventCard _id={''} name={''} date={''} location={''} time={''} description={''} price={''} image={''} organizer={''} eventType={''} sponsors={''} /> */}
        </main>
  );
}
