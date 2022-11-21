import viewResumeDownload from '@/lib/viewResumeDownload';

interface Props {
  resumeId: string;
}

export default function ViewPdf({ resumeId }: Props) {
  return <>{viewResumeDownload(resumeId)}</>;
}
