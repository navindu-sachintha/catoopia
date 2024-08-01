import { fonts } from "./fonts";
import type { Metadata } from "next";
import Providers from "./Providers";



export const metadata: Metadata = {
  title: "Catoopia",
  description: "World of Cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.ubuntu.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
