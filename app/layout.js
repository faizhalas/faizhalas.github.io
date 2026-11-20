import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/site";

const font = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: { default: profile.name, template: `%s | ${profile.name}` },
  description: profile.intro,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
