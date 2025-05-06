import './globals.css';
import { Outfit, Noto_Serif } from 'next/font/google';


// Initialize the fonts
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit'
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-serif'
});

export const metadata = {
  title: "Chai's Portfolio",
  description: "Personal portfolio website showcasing guides and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${notoSerif.variable}`}>
      <head>
        <link rel="icon" href="about:blank" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}