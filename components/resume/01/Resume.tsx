import dynamic from 'next/dynamic';

import ResumeEditor from '@/components/resume/common/ResumeEditor';
import Overlay from '@/components/Overlay';

const ResumeDocument = dynamic(
  () => import('../../../components/resume/01/ResumeDocument'),
  { ssr: false },
);

export default function Resume() {
  return (
    <>
      <Overlay />
      <div className="container mx-auto flex lg:flex-row flex-col lg:h-screen justify-center py-14 px-4 lg:px-0">
        <div className="lg:w-3/12 w-full">
          <ResumeEditor />
        </div>
        <div className="lg:w-9/12 w-full">
          <ResumeDocument />
        </div>
      </div>
    </>
  );
}
