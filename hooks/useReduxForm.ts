import { useAppSelector } from '@/hooks/useRedux';
import { updateCV } from '@/redux/builder-slice';
import { useAppDispatch } from '@/redux/store';

export default function useReduxForm() {
  const dispatch = useAppDispatch();
  const { cvs } = useAppSelector((state) => state.builder);

  function onChangeHandler(e: any, name: string) {
    dispatch(updateCV({ ...cvs, [name]: e.target.value }));
  }
  const getInputValue = (name: string) => (cvs[name] ? cvs[name] : '');

  return { onChangeHandler, getInputValue };
}
