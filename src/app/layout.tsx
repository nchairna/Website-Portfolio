
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
<<<<<<< HEAD
    <html lang="en" className={`${outfit.variable} ${notoSerif.variable}`}>
      <body>
       
          {children}
      
      </body>
=======
    <html lang="en">
      <body>{children}</body>
>>>>>>> b8316ed3b89389b522a95e9ef63a88d061d5287c
    </html>
  )
}