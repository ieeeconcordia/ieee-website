import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#E0F2F7" }}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
