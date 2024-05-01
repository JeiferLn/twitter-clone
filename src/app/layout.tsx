import type { Metadata } from "next";
import {NextUIProvider} from "@nextui-org/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clon de Twitter",
  description: "Aprendiendo a usar Next.js y TypeScript"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
