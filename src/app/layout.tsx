import SidebarLayout from './components/SidebarLayout';
import './globals.css';
import { Outfit, Noto_Serif } from 'next/font/google';
import Title from "./components/Title";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${notoSerif.variable}`}>
      <body className="">
        <Title />
        <SidebarLayout>
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}