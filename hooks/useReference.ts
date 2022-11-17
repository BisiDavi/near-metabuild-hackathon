import { useAppSelector } from '@/hooks/useRedux';
import {
  addReference,
  removeReference,
  updateCV,
  updateReference,
} from '@/redux/builder-slice';
import { useAppDispatch } from '@/redux/store';

export default function useReference() {
  const { cvs }: any = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

  function getInputValue(id: string, index1: number, index2: number) {
    const splittedId = id.split('.');
    const group = splittedId[0];

    return cvs[group][index1][index2].text;
  }

  function addReferenceHandler() {
    const referencesLength = cvs.references.length;
    dispatch(
      addReference([
        {
          text: '',
          name: 'title',
          placeholder: 'title',
          id: `references.title-${referencesLength}`,
          type: 'text',
        },
        {
          text: '',
          name: 'email',
          placeholder: 'email',
          id: `references.email-${referencesLength}`,
          type: 'email',
        },
        {
          text: '',
          name: 'phone',
          placeholder: 'phone',
          id: `references.phone-${referencesLength}`,
          type: 'text',
        },
      ]),
    );
  }

  function removeReferenceHandler(index: number) {
    let tempReference = [...cvs.references];
    tempReference.splice(index, 1);
    dispatch(removeReference(tempReference));
  }

  function onChangeHandler(index1: number, index2: number, text: string) {
    dispatch(updateReference({ text, index1, index2 }));
  }

  const disableDelete = cvs.references.length === 1 ? true : false;
  const disableDeleteClassname =
    cvs.references.length === 1 ? 'cursor-not-allowed' : '';

  return {
    getInputValue,
    addReferenceHandler,
    removeReferenceHandler,
    disableDelete,
    disableDeleteClassname,
    onChangeHandler,
  };
}
