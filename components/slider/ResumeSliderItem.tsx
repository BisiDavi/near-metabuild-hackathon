/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import { useAppDispatch } from '@/hooks/useRedux';
import Button from '@/components/Button';
import selectSeeder from '@/lib/selectSeeder';
import formatResumePrice from '@/lib/formatResumePrice';
import { selectResume } from '@/redux/resume-slice';
import type { resumeStateType } from '@/types/redux-types';
import type { resumeType } from '@/types';

interface Props {
  item: resumeType;
}

export default function ResumeSliderItem({ item }: Props) {
  const dispatch = useAppDispatch();
  const price = formatResumePrice(item.price);
  const router = useRouter();

  const text = item.bought > 1 ? 'people' : 'person';

  function selectResumeHandler(type: resumeStateType['selectedResume']) {
    const selectedSeeder = selectSeeder(type);
    router.push(`/template/${type}`);
    return dispatch(selectResume({ type, seeder: selectedSeeder }));
  }
  return (
    <div className="relative  mx-3 flex flex-col items-center justify-center rounded border">
      <img src={item.image} alt={item.name} className="z-10 rounded-md" />
      <Button
        className="absolute z-50 mx-auto lg:text-sm text-xs flex items-center justify-center rounded-lg bg-blue-500 px-4 py-1 text-white hover:bg-opacity-80"
        text="Use this Template"
        onClick={() => selectResumeHandler(item.id)}
      />
      <div className="absolute bottom-2 z-10  rounded-md bg-gray-400 px-2 py-0.5 lg:text-sm text-xs text-white">
        Price: {price} NEAR, {item.bought} {text} chose this template
      </div>
      <div className="absolute top-2 right-4 z-10 rounded-md bg-gray-400 px-2 py-0.5 lg:text-sm text-xs text-white">
        {item.name}
      </div>
    </div>
  );
}
