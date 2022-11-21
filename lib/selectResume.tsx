import Resume1 from '@/components/resume/view-resume/Resume1';
import Resume2 from '@/components/resume/view-resume/Resume2';
import Resume3 from '@/components/resume/view-resume/Resume3';
import Resume4 from '@/components/resume/view-resume/Resume4';

export default function selectResume(resume: string, asideBg: any, cvs: any) {
  console.log('resume-selectResume', resume);
  switch (resume) {
    case 'resume-1':
      return <Resume1 asideBg={asideBg} cvs={cvs} />;
    case 'resume-2':
      return <Resume2 asideBg={asideBg} cvs={cvs} />;
    case 'resume-3':
      return <Resume3 asideBg={asideBg} cvs={cvs} />;
    case 'resume-4':
      return <Resume4 asideBg={asideBg} cvs={cvs} />;
  }
}

export function getResumeName(resume: string) {
  switch (resume) {
    case 'resume-1':
      return 'Resume 1.pdf';
    case 'resume-2':
      return 'Resume 2.pdf';
    case 'resume-3':
      return 'Resume 3.pdf';
    case 'resume-4':
      return 'Resume 4.pdf';
  }
}
