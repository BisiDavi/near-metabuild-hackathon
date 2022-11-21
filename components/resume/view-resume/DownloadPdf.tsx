import selectResume from '@/lib/selectResume';

interface Props {
  resumeId: string;
}

export default function ViewPdf({ resumeId }: Props) {
  return <>{selectResume(resumeId)}</>;
}
