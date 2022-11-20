import dynamic from 'next/dynamic';

import ResumeEditor from '@/components/resume/common/ResumeEditor';

const ResumeDocument = dynamic(
  () => import('../../../components/resume/03/ResumeDocument'),
  { ssr: false },
);

export default function Resume() {
  return (
    <div className="container mx-auto flex h-screen justify-center py-4">
      <div className="w-3/12">
        <ResumeEditor />
      </div>
      <div className="w-9/12">
        <ResumeDocument />
      </div>
    </div>
  );
}
