import { HexColorPicker } from 'react-colorful';

import { useAppDispatch } from '@/redux/store';
import { useAppSelector } from '@/hooks/useRedux';
import { updateAsideBg } from '@/redux/resume-slice';

export default function AsideColorPicker() {
  const { asideBg, selectedResume } = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();
  const asideColor = selectedResume ? asideBg[selectedResume] : 'black';

  function onChangeHandler(color: string) {
    dispatch(updateAsideBg({ color, active: selectedResume }));
  }
  return <HexColorPicker color={asideColor} onChange={onChangeHandler} />;
}
