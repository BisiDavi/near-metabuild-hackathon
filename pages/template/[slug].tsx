import { useRouter } from 'next/router';

import Layout from '@/layout';
import displayResume from '@/lib/displayResume';

export default function ResumeTemplatePage() {
  const router = useRouter();
  const { slug }: any = router.query;
  return (
    <Layout showHero={false}>
      <div className="content">{displayResume(slug)}</div>
    </Layout>
  );
}
