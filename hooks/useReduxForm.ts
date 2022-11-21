import { useAppSelector } from '@/hooks/useRedux';
import { updateCV } from '@/redux/resume-slice';
import { useAppDispatch } from '@/redux/store';
import { cvsGroupType } from '@/types';

export default function useReduxForm() {
  const dispatch = useAppDispatch();
  const { cvs }: any = useAppSelector((state) => state.resume);

  function onChangeHandler(e: any, id: any) {
    if (cvs) {
      const splittedId = id.split('.');
      const group: cvsGroupType = splittedId[0];
      const name = splittedId[1];
      dispatch(
        updateCV({
          ...cvs,
          [group]: { ...cvs[group], [name]: e.target.value },
        }),
      );
    }
  }
  
  const getInputValue = (id: any, index?: number) => {
    const splittedId = id.split('.');
    const name = splittedId[1];
    const group = splittedId[0];

    const objectValue = cvs[group][name] ? cvs[group][name] : '';
    const arrayValue2 =
      index && cvs[group][index] ? cvs[group][index]?.text : '';
    const arrayValue =
      typeof cvs[group].length === 'number' ? arrayValue2 : objectValue;
    return arrayValue;
  };

  return { onChangeHandler, getInputValue };
}
