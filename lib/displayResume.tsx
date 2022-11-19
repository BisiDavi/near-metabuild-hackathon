import Resume from '@/components/resume/01/Resume';
import Resume2 from '@/components/resume/02/Resume';
import Resume3 from '@/components/resume/03/Resume';

export default function displayResume(resume: string) {
  switch (resume) {
    case 'resume-1':
      return <Resume />;
    case 'resume-2':
      return <Resume2 />;
    case 'resume-3':
      return <Resume3 />;
  }
}
