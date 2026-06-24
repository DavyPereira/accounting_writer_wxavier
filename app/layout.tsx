import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "W Xavier Contabilidade",
  description:
    "Contabilidade estratégica, fiscal e trabalhista para empresas que querem crescer com segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}