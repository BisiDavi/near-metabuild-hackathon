import { useAppSelector } from '@/hooks/useRedux';
import { useAppDispatch } from '@/redux/store';

export default function useReference() {
  const { cvs }: any = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

  function getInputValue(id: string, index1: number, index2: number) {
    const splittedId = id.split('.');
    const name = splittedId[1];
    const group = splittedId[0];

    return cvs[group][index1][index2][name];
  }

  return {
    getInputValue,
  };
}
