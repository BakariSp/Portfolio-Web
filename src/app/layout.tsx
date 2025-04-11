import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; 
import NavBar from '../components/navbar/nav-bar';
import Footer from '../components/footer/footer';
import { layoutConfig } from '@/lib/layout-config';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Linghang Cai - Creative Engineer",
  description: "Portfolio of Linghang Cai, exploring 3D space and interaction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <main className={`flex-1 ${layoutConfig.contentMargin}`}>
            <NavBar />
            <div className={`${layoutConfig.containerMax} mx-auto`}>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
