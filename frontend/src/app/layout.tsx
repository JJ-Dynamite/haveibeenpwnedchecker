import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Check if you have been hacked',
  description: 'Check if you have been hacked - Built with Rust + Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
