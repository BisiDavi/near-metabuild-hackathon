import Link from 'next/link';
import Layout from '@/layout';

export default function Rate() {
  return (
    <Layout>
      <section className="container mx-auto py-4">
        <h4 className="mt-4 text-center text-3xl font-bold">
          Rate our resumé and get rewarded with 0.1 NEAR
        </h4>
        <div className="how my-4 mx-auto flex flex-col items-center justify-center">
          <h6 className="text-right text-xl font-bold underline">
           Procedure
          </h6>
          <ul>
            <li className="my-1">
              1. Select a resumé template from the{' '}
              <Link
                href="/#get-started"
                className="font-bold text-blue-500 hover:text-red-500"
              >
                homepage
              </Link>
            </li>
            <li className="my-1">
              2. Fill the resumé template with your details
            </li>
            <li className="my-1">
              3. Fill the resumé template with your details
            </li>
            <li className="my-1">
              4. Make payment for the resumé template and download your resumé
            </li>
            <li className="my-1">
              5. Rate the resumé template used and get 0.1 NEAR transferred to
              your test wallet
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
