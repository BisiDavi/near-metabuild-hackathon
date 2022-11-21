import selectResume from '@/lib/selectResume';

interface Props {
  resumeId: string;
  cvs: any;
  asideBg: any;
}

export default function ViewPdf({ resumeId, asideBg, cvs }: Props) {
  return <>{selectResume(resumeId, asideBg, cvs)}</>;
}
