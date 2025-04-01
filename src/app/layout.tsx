import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Point do Canal",
  description: "A melhor hamburgueria da Praia Grande",
  openGraph:{
    images: [
      {
        url: "/logofundo.jpg", // Caminho da imagem
        width: 1200,
        height: 630,
        alt: "Point do Canal - Hambúrguer Artesanal",
      },
    ],
  }

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
