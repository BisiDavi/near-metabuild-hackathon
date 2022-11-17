import { useAppSelector } from '@/hooks/useRedux';
import { addReference, updateCV } from '@/redux/builder-slice';
import { useAppDispatch } from '@/redux/store';

export default function useReference() {
  const { cvs }: any = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

  function getInputValue(id: string, index1: number, index2: number) {
    const splittedId = id.split('.');
    const name = splittedId[1];
    const group = splittedId[0];

    return cvs[group][index1][index2].text;
  }

  function addReferenceHandler(){
    const referencesLength = cvs.references.length + 1;
    dispatch(
      addReference({
        index: referencesLength,
        reference: [
          {
            text: '',
            name: 'title',
            placeholder: 'title',
            id: 'references.title-1',
            type: 'text',
          },
          {
            text: '',
            name: 'email',
            placeholder: 'email',
            id: 'references.email-1',
            type: 'email',
          },
          {
            text: '',
            name: 'phone',
            placeholder: 'phone',
            id: 'references.phone-1',
            type: 'text',
          },
        ],
      }),
    );
  }

  return {
    getInputValue,
  };
}
