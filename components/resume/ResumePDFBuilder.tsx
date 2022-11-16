import dynamic from 'next/dynamic';
import ResumeEditor from '@/components/resume/ResumeEditor';

const ResumeDocument = dynamic(
  () => import('@/components/resume/ResumeDocument'),
);
export default function ResumePDFBuilder() {
  return (
    <div className="container mx-auto flex h-screen justify-center">
      <div className="w-3/12">
        <ResumeEditor />
      </div>
      <div className="w-9/12">
        <ResumeDocument />
      </div>
    </div>
  );
}
