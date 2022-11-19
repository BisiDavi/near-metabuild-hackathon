// import Resume from '@/components/resume/01/Resume';
// import Resume2 from '@/components/resume/02/Resume';
// import Resume3 from '@/components/resume/03/Resume';
import dynamic from 'next/dynamic';

const Resume = dynamic(() => import('@/components/resume/01/Resume'), {
  ssr: false,
});

const Resume2 = dynamic(() => import('@/components/resume/02/Resume'), {
  ssr: false,
});

const Resume3 = dynamic(() => import('@/components/resume/03/Resume'), {
  ssr: false,
});

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
