import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Serverside Rewind',
    template: 'Serverside Rewind | %s',
  },
  description: 'Rewinding the past to learn the future',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
