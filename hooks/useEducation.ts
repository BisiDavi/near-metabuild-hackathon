import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { addSection, updateSection } from '@/redux/builder-slice';

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

  function deleteEducationHandler(index: number) {
    let tempEducation = [...cvs.education];
    tempEducation.splice(index, 1);
    dispatch(
      updateSection({ sectionKey: 'education', section: tempEducation }),
    );
  }

  function getInputValue(index1: number, index2: number, index3: number) {
    return cvs.education[index1][index2][index3].text;
  }

  function addAchievementHandler(index: number) {
    let tempEducation = [...cvs.education];
    const achievementLength = tempEducation[index][2].length;
    tempEducation[index][2] = [
      ...tempEducation[index][2],
      {
        text: '',
        name: `achievement-${achievementLength}`,
        placeholder: `Achievement ${achievementLength}`,
        id: 'education.achievement',
      },
    ];
    dispatch(
      updateSection({ sectionKey: 'education', section: tempEducation }),
    );
  }

  function removeAchievementHandler() {}

  return {
    addEducationHandler,
    deleteEducationHandler,
    getInputValue,
    addAchievementHandler,
    removeAchievementHandler,
  };
}
