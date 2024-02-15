import { Inter as FontSans } from "next/font/google";

import { cn } from "_/lib/utils";

import { ThemeProvider } from "_/components/ui/theme-provider";
import { Header } from "_/components/ui/header";
import { Logo } from "_/components/ui/logo";

import "_/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "_/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid grid-cols-1 grid-rows-[8vh_1fr] md:grid-cols-[20vw_1fr] md:grid-rows-[8vh_minmax(6.25rem,_92vh)]">
            <Logo className="md:flex hidden" />
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
