import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pro Bono Initiative | Justice for the Vulnerable',
  description:
    'Pro Bono Initiative (PBI) delivers justice for vulnerable populations in South Sudan, especially women and girls, through legal aid and partnership.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sand">{children}</body>
    </html>
  );
}
