import ResumeDocument from '@/components/resume/01/ResumeDocument';
import ResumeDocument2 from '@/components/resume/02/ResumeDocument';
import ResumeDocument3 from '@/components/resume/03/ResumeDocument';
import ResumeDocument4 from '@/components/resume/04/ResumeDocument';

export default function displayResumeDocument(resume: string) {
  switch (resume) {
    case 'resume-1':
      return <ResumeDocument />;
    case 'resume-2':
      return <ResumeDocument2 />;
    case 'resume-3':
      return <ResumeDocument3 />;
    case 'resume-4':
      return <ResumeDocument4 />;
  }
}
