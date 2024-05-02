import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager from '@magicul/next-google-tag-manager';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cognitive.ai - Advanced Ethical Solutions",
  description:
    "Our mission is to bring the power of artificial intelligence to various industries and create innovative solutions that shape the future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GoogleTagManager id="G-3HD1H0SSM2" />
        {children}
        </body>
    </html>
  );
}
