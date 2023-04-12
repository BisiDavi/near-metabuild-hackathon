import dynamic from 'next/dynamic';

import ResumeEditor from '@/components/resume/common/ResumeEditor';
import ResumeLayout from '@/layout/ResumeLayout';

const ResumeDocument = dynamic(
  () => import('../../../components/resume/03/ResumeDocument'),
  { ssr: false },
);

export default function Resume() {
  return (
    <ResumeLayout resumeEditor={<ResumeEditor />}>
      <ResumeDocument />
    </ResumeLayout>
  );
}
