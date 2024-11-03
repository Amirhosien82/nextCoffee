import Header from "@/app/_components/Header/Header";
import "./globals.css";
import Footer from "@/app/_components/Footer/Footer";

export const metadata = {
  title: {
    template: "نِکست کافه | %s",
    default: "نِکست کافه",
  },
};

function RootLayout({ children }) {
  return (
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
  );
}

export default RootLayout;
