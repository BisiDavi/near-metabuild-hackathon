import { useRouter } from 'next/router';

import Layout from '@/layout';
import displayResume from '@/lib/displayResume';

export default function ResumeTemplatePage() {
  const router = useRouter();
  const { slug }: any = router.query;
  console.log('slug', slug);
  return (
    <Layout showHero={false}>
      {slug && <div className="content">{displayResume(slug)}</div>}
    </Layout>
  );
}
