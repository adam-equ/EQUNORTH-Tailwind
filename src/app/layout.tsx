import "./assets/styles/sites/equnorth/main.scss";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScrolling from "@/components/smoothScrolling";
import AOSInitialiser from "@/components/aosinitialiser";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrolling>
          <div className="site-wrap">
            <Navbar />
            <AOSInitialiser />
            {children}
            <Footer />
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
