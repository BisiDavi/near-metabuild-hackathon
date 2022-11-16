import { useAppSelector } from '@/hooks/useRedux';
import { updateCV } from '@/redux/builder-slice';
import { useAppDispatch } from '@/redux/store';
import { cvsGroupType } from '@/types';

export default function useReduxForm() {
  const dispatch = useAppDispatch();
  const { cvs }: any = useAppSelector((state) => state.builder);

  function onChangeHandler(e: any, id: any) {
    const splittedId = id.split('.');
    const group: cvsGroupType = splittedId[0];
    const name = splittedId[1];
    dispatch(
      updateCV({ ...cvs, [group]: { ...cvs[group], [name]: e.target.value } }),
    );
  }
  const getInputValue = (id: any) => {
    const splittedId = id.split('.');
    const name = splittedId[1];
    const group = splittedId[0];

    const result: any = cvs[group][name] ? cvs[group][name] : '';
    return result;
  };

  return { onChangeHandler, getInputValue };
}
