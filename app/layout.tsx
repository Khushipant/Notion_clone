import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import { EdgeStoreProvider } from '@/lib/edgestore';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kotion",
  description: "By Khushi & Tarush",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/nono-dark.svg",
        href: "/nono-dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/nono-light.svg",
        href: "/nono-light.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        <ConvexClientProvider>
        <EdgeStoreProvider>
          <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem disableTransitionOnChange 
          storageKey="Kotion-theme-2">
            <Toaster position="bottom-center"/>
            <ModalProvider/>
            {children}
          </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
        
      </body>
    </html>
  );
}
