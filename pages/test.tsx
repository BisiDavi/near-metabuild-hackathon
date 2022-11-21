import Layout from '@/layout';
import dynamic from 'next/dynamic';

import ResumeEditor from '@/components/resume/common/ResumeEditor';

const ResumeDocument = dynamic(
  () => import('@/components/resume/04/ResumeDocument'),
  { ssr: false },
);

export default function Test() {
  return (
    <Layout showHero={false}>
      <section className="container mx-auto flex h-screen justify-center py-14">
        <div className="w-3/12">
          <ResumeEditor colorPicker={false} />
        </div>
        <div className="w-9/12">
          <ResumeDocument />
        </div>
      </section>
    </Layout>
  );
}
