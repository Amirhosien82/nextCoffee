import Header from "@/app/_components/Header/Header";
import "./globals.css";
import Footer from "@/app/_components/Footer/Footer.js";
import ContextApi from "@/app/_lib/ContextApi";

export const metadata = {
  title: {
    template: "نِکست کافه | %s",
    default: "نِکست کافه",
  },
};

function RootLayout({ children }) {
  return (
    <ContextApi>
      <html lang="en">
        <body>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ContextApi>
  );
}

export default RootLayout;
