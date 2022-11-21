/* eslint-disable @next/next/no-img-element */
import Router from 'next/router';

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

  function selectResumeHandler(type: resumeStateType['selectedResume']) {
    console.log('type', type);
    const selectedSeeder = selectSeeder(type);
    Router.push(`/template/${type}`);
    return dispatch(selectResume({ type, seeder: selectedSeeder }));
  }
  return (
    <div className="relative  mx-3 rounded flex flex-col items-center justify-center border">
      <img src={item.image} alt={item.name} className="z-10 rounded-md" />
      <Button
        className="absolute z-50 mx-auto flex items-center justify-center rounded-lg bg-blue-500 px-4 py-1 text-white hover:bg-opacity-80"
        text="Use this Template"
        onClick={() => selectResumeHandler(item.id)}
      />
      <div className="absolute bottom-2 z-10 rounded-md bg-gray-400 px-2 py-0.5 text-sm text-white">
        Price: {price} NEAR
      </div>
    </div>
  );
}
