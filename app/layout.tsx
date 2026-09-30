import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-next",
  weight: ["500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteSpace — Online Courses",
  description: "Get access to hundreds of courses from creators around the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <head>
        {/* Satoshi + Clash Display aren't on Google Fonts */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=clash-display@700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
