import Resume1 from '@/components/resume/view-resume/Resume1';
import Resume2 from '@/components/resume/view-resume/Resume2';
import Resume3 from '@/components/resume/view-resume/Resume3';
import Resume4 from '@/components/resume/view-resume/Resume4';

export default function viewResumeDownload(resume: string) {
  switch (resume) {
    case 'resume-1':
      return <Resume1 />;
    case 'resume-2':
      return <Resume2 />;
    case 'resume-3':
      return <Resume3 />;
    case 'resume-4':
      return <Resume4 />;
  }
}
