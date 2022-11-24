import Link from 'next/link';
import Layout from '@/layout';

export default function Reviewer() {
  return (
    <Layout>
      <section className="container mx-auto py-4">
        <h4 className="mt-4 text-center text-3xl font-bold">
          Earn as a Reviewer{' '}
        </h4>
        <div className="how my-4 mx-auto flex flex-col items-center justify-center">
          <h6 className="text-right text-xl font-bold underline">Procedure</h6>
          <ul className="mt-2">
            <li>1. Create a reviewer account</li>
            <li>2. Get listed as a reviewer</li>
            <li>3. People hire you to review their resumé</li>
            <li>4. Get paid (0.5 NEAR) after review in NEAR testnet token</li>
          </ul>
          <Link
            href="/cv/reviewer/dashboard"
            className="my-8 rounded border border-2 px-4 py-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Get Started
          </Link>

          <Link
            href="/cv/reviewer/listing"
            className="hover:bg-opacity-80 rounded bg-green-500 px-4 py-1.5 font-bold text-white"
          >
            View Resume Reviewers
          </Link>
        </div>
      </section>
    </Layout>
  );
}
