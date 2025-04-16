import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevOps Spaces",
  description: "Welcome back! Please enter your details.",
  openGraph: {
    title: "DevOps Spaces",
    description: "Welcome back! Please enter your details.",
    images: [
      {
        url: "/meta-tag.png",
        width: 800,
        height: 600,
        alt: "DevOps Spaces Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Spaces",
    description: "Welcome back! Please enter your details.",
    images: ["/meta-tag.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
