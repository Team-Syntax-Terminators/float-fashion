import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import "../styles/scss/main.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Float Fashion",
  description: "Enjoyable Shopping Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
