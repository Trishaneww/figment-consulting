import type { Metadata } from "next";
import "./globals.css";
import { Host_Grotesk, Montserrat, Noto_Sans_Deseret, Questrial } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Questrial({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figment Consulting",
  description:
    "We design and develop custom, high-performing websites tailored to help your business stand out and grow.",
  icons: {
    icon: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}