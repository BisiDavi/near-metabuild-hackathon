import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { addSection, removeSection } from '@/redux/builder-slice';

export default function useEducation() {
  const { cvs } = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

  function addEducationHandler() {
    const educationLength = cvs.education.length;
    dispatch(
      addSection({
        sectionKey: 'education',
        section: [
          [
            {
              text: '',
              name: `course-${educationLength}`,
              placeholder: 'Course of Study',
              id: `education.course-${educationLength}`,
            },
          ],
          [
            {
              text: '',
              name: `startedOn-${educationLength}`,
              placeholder: 'Started on (Date)',
              id: `education.started-on-${educationLength}`,
            },
            {
              text: '',
              name: `endOn-${educationLength}`,
              placeholder: 'End on (Date)',
              id: `education.end-on-${educationLength}`,
            },
          ],
          [
            {
              text: '',
              name: `achievement-${educationLength}`,
              placeholder: 'Achievement',
              id: `education.achievement-${educationLength}`,
            },
          ],
        ],
      }),
    );
  }

  function deleteEducationHandler() {
    dispatch(removeSection({ sectionKey: 'education', section: [] }));
  }

  return { addEducationHandler, deleteEducationHandler };
}
