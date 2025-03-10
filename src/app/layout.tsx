import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { theme } from '@/lib/theme';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Your Brand - Digital Innovation Agency',
  description: 'We create cutting-edge digital experiences with modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        style={{
          background: `linear-gradient(to bottom, ${theme.colors.background.gradient.from}, ${theme.colors.background.gradient.via}, ${theme.colors.background.gradient.to})`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
