import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Serverside Rewind</h1>
      <p>Rewinding the past to learn the future</p>
      <Link href='/posts'>Posts</Link>
    </main>
  );
}
