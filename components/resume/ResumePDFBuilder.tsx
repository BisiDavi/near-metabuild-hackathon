'use client';
import ResumeDocument from '@/components/resume/ResumeDocument';
import ResumeEditor from '@/components/resume/ResumeEditor';

export default function ResumePDFBuilder() {
  return (
    <div className="container mx-auto flex h-screen justify-center">
      <div className="w-3/12">
        <ResumeEditor />
      </div>
      <div className="w-9/12">
        {/* <ResumeDocument /> */}
      </div>
    </div>
  );
}
