import useFirebase from '@/hooks/useFirebase';
import Layout from '@/layout';

export default function Reviewer() {
  const { googleProviderReviewer } = useFirebase();

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
          <button
            className="hover:opacity-bg-80 relative my-8 mx-auto flex w-auto rounded-md bg-blue-500 px-4 py-1.5 font-bold text-white"
            onClick={googleProviderReviewer}
          >
            login/signup as Reviewer
            <span className="absolute -right-1.5 -top-1 inline-flex h-3  w-3 animate-ping rounded-full bg-red-500"></span>
            <span className="absolute -right-1.5 -top-1 inline-flex h-3 w-3 rounded-full bg-red-500"></span>
          </button>
        </div>
      </section>
    </Layout>
  );
}
