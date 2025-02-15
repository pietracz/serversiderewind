import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Serverside Rewind',
    template: '%s |Serverside Rewind',
  },
  description: 'Rewinding the past to learn the future',

  /* openGraph: {
      images: [
        {
          url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        },
      ],
    }, */
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
