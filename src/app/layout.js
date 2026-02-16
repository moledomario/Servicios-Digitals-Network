import { Geist, Geist_Mono, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import Header from "./componentes/Header";

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: ["400"],
  fontFamily: "DM Serif Text",
  fontStyle: "normal",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Servicios Digitales Network",
  description: "Servicios Digitales Network",
  icons: {
    icon: "/logo-tab.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
