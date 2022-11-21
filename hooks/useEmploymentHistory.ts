import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import {
  addSection,
  removeAchievement,
  updateAchievement,
  updateSection,
  updateSectionText,
} from '@/redux/resume-slice';

export default function useEmploymentHistory() {
  const { cvs } = useAppSelector((state) => state.resume);
  const dispatch = useAppDispatch();

  function addAchievementHandler(index: number) {
    if (cvs) {
      const achievementLength = cvs.employmentHistory[index][2].length + 1;
      const achievementArray = {
        text: '',
        name: `achievement-${achievementLength}`,
        placeholder: `Achievement ${achievementLength}`,
        id: `employmentHistory.achievement-${achievementLength}`,
        type: 'input',
      };
      dispatch(
        updateAchievement({
          sectionKey: 'employmentHistory',
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
        sectionKey: 'employmentHistory',
        index,
        achievementId: 2,
        index2,
      }),
    );
  }

  function addEmploymentHistoryHandler() {
    if (cvs) {
      const employmentArraylength = cvs?.employmentHistory.length;
      const achievementLength = cvs.employmentHistory[0][2].length + 1;

      dispatch(
        addSection({
          sectionKey: 'employmentHistory',
          section: [
            [
              {
                text: '',
                name: 'role',
                placeholder: 'Job Role',
                id: `employmentHistory.role-${employmentArraylength}`,
                type: 'input',
              },
            ],
            [
              {
                text: '',
                name: 'startedOn',
                placeholder: 'Started on (Date)',
                id: `employmentHistory.started-on-${employmentArraylength}`,
                type: 'input',
              },
              {
                text: '',
                name: 'endOn',
                placeholder: 'End on (Date)',
                id: `employmentHistory.end-on-${employmentArraylength}`,
                type: 'input',
              },
            ],
            [
              {
                text: '',
                name: `achievement-${achievementLength}`,
                placeholder: 'Achievement 1',
                id: `employmentHistory.achievement-${achievementLength}`,
                type: 'input',
              },
            ],
          ],
        }),
      );
    }
  }
  function removeEmploymentHistoryHandler(index: number) {
    if (cvs) {
      let tempEmploymentHistory = [...cvs.employmentHistory];
      tempEmploymentHistory.splice(index, 1);
      dispatch(
        updateSection({
          sectionKey: 'employmentHistory',
          section: tempEmploymentHistory,
        }),
      );
    }
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
        sectionKey: 'employmentHistory',
        text: e.target.value,
      }),
    );
  }

  function getInputValue(index1: number, index2: number, index3: number) {
    return cvs?.employmentHistory[index1][index2][index3].text;
  }

  return {
    cvs,
    addAchievementHandler,
    removeAchievementHandler,
    addEmploymentHistoryHandler,
    removeEmploymentHistoryHandler,
    onChangeHandler,
    getInputValue,
  };
}
