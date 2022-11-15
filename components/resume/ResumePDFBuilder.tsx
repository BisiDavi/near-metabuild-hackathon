import ResumeDocument from '@/components/resume/ResumeDocument';

export default function ResumePDFBuilder() {
  return (
    <div className="container mx-auto flex h-screen justify-center">
        <div className="w-1/6"></div>
      <div className="w-5/6">
        <ResumeDocument />
      </div>
    </div>
  );
}
