import type { GetServerSidePropsContext } from 'next';

import Layout from '@/layout';

export default function Reviewer() {
  return (
    <Layout showHero={false}>
      <section className="container mx-auto py-4">
       
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.query;
  return {
    props: {
      slug,
    },
  };
}
