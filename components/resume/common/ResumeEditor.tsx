import useResumeEditor from '@/hooks/useResumeEditor';
import FormProgress from '@/components/form/FormProgress';
import Resumeform from '@/components/form/Resumeform';
import AsideColorPicker from '@/components/resume/common/AsideColorPicker';

interface Props {
  colorPicker?: boolean;
}

export default function ResumeEditor({ colorPicker = true }: Props) {
  const resume = useResumeEditor();
  const { currentStage } = resume;

  return (
    <aside className="mr-6">
      <h5 className="text-center text-xl font-bold">Edit Resume</h5>
      <FormProgress currentStage={currentStage} />
      <Resumeform resume={resume} />
      {colorPicker && <AsideColorPicker />}
    </aside>
  );
}
