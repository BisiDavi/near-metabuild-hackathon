import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import {
  addSection,
  removeAchievement,
  updateAchievement,
  updateSection,
  updateSectionText,
} from '@/redux/resume-slice';

export default function useEducation() {
  const { cvs } = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();

  function addEducationHandler() {
    const educationLength = cvs?.education.length;

    dispatch(
      addSection({
        sectionKey: 'education',
        section: [
          [
            {
              text: '',
              name: 'course',
              placeholder: 'Course of Study',
              id: `education.course-${educationLength}`,
            },
          ],
          [
            {
              text: '',
              name: 'startedOn',
              placeholder: 'Started on (Date)',
              id: `education.started-on-${educationLength}`,
            },
            {
              text: '',
              name: 'endOn',
              placeholder: 'End on (Date)',
              id: `education.end-on-${educationLength}`,
            },
          ],
          [
            {
              text: '',
              name: 'achievement-1',
              placeholder: 'Achievement',
              id: `education.achievement-${educationLength}`,
            },
          ],
        ],
      }),
    );
  }

  function deleteEducationHandler(index: number) {
    if (cvs) {
      let tempEducation = [...cvs.education];
      tempEducation.splice(index, 1);
      dispatch(
        updateSection({ sectionKey: 'education', section: tempEducation }),
      );
    }
  }

  function getInputValue(index1: number, index2: number, index3: number) {
    if (cvs) {
      return cvs.education[index1][index2][index3].text;
    }
  }

  function addAchievementHandler(index: number) {
    if (cvs) {
      const achievementLength = cvs?.education[index][2].length + 1;
      const achievementArray = {
        text: '',
        name: `achievement-${achievementLength}`,
        placeholder: `Achievement ${achievementLength}`,
        id: 'education.achievement',
      };

      dispatch(
        updateAchievement({
          sectionKey: 'education',
          index,
          achievementId: 2,
          section: achievementArray,
        }),
      );
    }
  }

  function removeAchievementHandler(index: number, index2: number) {
    dispatch(
      removeAchievement({
        sectionKey: 'education',
        index,
        achievementId: 2,
        index2,
      }),
    );
  }

  function onChangeHandler(
    e: any,
    index1: number,
    index2: number,
    index3: number,
  ) {
    dispatch(
      updateSectionText({
        index1,
        index2,
        index3,
        sectionKey: 'education',
        text: e.target.value,
      }),
    );
  }

  return {
    addEducationHandler,
    deleteEducationHandler,
    getInputValue,
    addAchievementHandler,
    removeAchievementHandler,
    onChangeHandler,
    cvs,
  };
}
