import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScrolling from "@/components/smoothScrolling";
import Aos from "@/components/aos";
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Aos />
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
