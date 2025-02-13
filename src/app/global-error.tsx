'use client'; // Error boundaries must be Client Components

import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error',
  description: 'Seems like something went wrong.',
};

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <main>
          <h1>Something went wrong!</h1>
          <p>{error.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
};

export default GlobalError;
