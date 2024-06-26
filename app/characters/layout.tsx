import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Characters",
   description: "Generated by Characters Page",
};


export default function charactersRootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         {children}
      </>
   );
}
