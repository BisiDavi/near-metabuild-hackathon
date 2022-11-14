import ProgressBar from '@/components/resume/ProgressBar';

interface Props {
  type: 'progress' | 'dot';
  text: string;
}

export default function Skill({ type, text }: Props) {
  return (
    <div className="flex items-center">
      <p>{text}</p>
      {/* <ProgressBar />  */}
    </div>
  );
}
