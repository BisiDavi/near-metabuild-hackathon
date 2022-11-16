import { FormProgressProps } from '@/types/interfaces';

export default function FormProgress({ currentStage }: FormProgressProps) {
  return (
    <div className="outer my-4 h-4 w-full rounded-full bg-gray-500">
      <div
        className="inner h-4 rounded-full bg-green-500"
        style={{ width: `${currentStage}%` }}
      ></div>
    </div>
  );
}
