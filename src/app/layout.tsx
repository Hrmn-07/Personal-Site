import "./globals.css";
import { Arvo } from "next/font/google";
import { Viewport } from "next";

const inter = Arvo({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Herman - Personal Website",
  description: "personal portfolio website",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <footer className="bg-black text-center py-5 mt-1 text-gray-400">
          <p>&copy; 2024 Hermanus Rumapea. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
