import { useAppSelector } from '@/hooks/useRedux';
import {
  addSection,
  updateSection,
  updateReference,
} from '@/redux/resume-slice';
import { useAppDispatch } from '@/redux/store';

export default function useReference() {
  const { cvs } = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();

  function getInputValue(index1: number, index2: number) {
    return cvs?.references[index1][index2].text;
  }

  function addReferenceHandler() {
    const referencesLength = cvs?.references.length;
    dispatch(
      addSection({
        sectionKey: 'references',
        section: [
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
        ],
      }),
    );
  }

  function removeReferenceHandler(index: number) {
    if (cvs) {
      let tempReference = [...cvs.references];
      tempReference.splice(index, 1);
      dispatch(
        updateSection({ sectionKey: 'references', section: tempReference }),
      );
    }
  }

  function onChangeHandler(index1: number, index2: number, text: string) {
    dispatch(updateReference({ text, index1, index2 }));
  }

  const disableDelete = cvs?.references.length === 1 ? true : false;
  const disableDeleteClassname =
    cvs?.references.length === 1 ? 'cursor-not-allowed' : '';

  return {
    cvs,
    getInputValue,
    addReferenceHandler,
    removeReferenceHandler,
    disableDelete,
    disableDeleteClassname,
    onChangeHandler,
  };
}
