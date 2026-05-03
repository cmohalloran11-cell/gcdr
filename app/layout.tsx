import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Gulf Coast Dent Removal | Paintless Dent Repair — Spring Hill, FL",
  description:
    "Paintless dent repair in Spring Hill, Florida. Door dings, hail damage, and panel dents removed without painting, fillers, or bodywork. Original factory paint preserved. By appointment, mobile service available.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bone text-graphite antialiased">
        {children}
      </body>
    </html>
  );
}
