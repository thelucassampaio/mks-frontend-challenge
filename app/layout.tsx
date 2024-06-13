import type { Metadata } from "next";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";

import { Montserrat } from "next/font/google";

import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas | Loja",
  description: "A Loja virtual da MKS Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="pt">
        <body className={montserrat.className}>
          <Header />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
