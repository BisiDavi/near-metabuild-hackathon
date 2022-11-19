import { GetServerSidePropsContext } from 'next';

import Layout from '@/layout';
import displayResume from '@/lib/displayResume';

interface Props {
  slug: string;
}

export default function ResumeTemplatePage({ slug }: Props) {
  return (
    <Layout showHero={false}>
      {slug && <div className="content">{displayResume(slug)}</div>}
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
