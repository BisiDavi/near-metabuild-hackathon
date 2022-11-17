import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import {
  addSection,
  removeAchievement,
  updateAchievement,
  updateSection,
  updateSectionText,
} from '@/redux/builder-slice';

export default function useEmploymentHistory() {
  const { cvs } = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

  function addAchievementHandler(index: number) {
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
    const employmentArraylength = cvs.employmentHistory.length;
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
              text: 'SEPTEMBER 2020',
              name: 'endOn',
              placeholder: 'End on (Date)',
              id: `employmentHistory.end-on-${employmentArraylength}`,
              type: 'input',
            },
          ],
          [
            {
              text: '',
              name: 'achievement',
              placeholder: 'Achievement 1',
              id: `employmentHistory.achievement-${achievementLength}`,
              type: 'input',
            },
          ],
        ],
      }),
    );
  }
  function removeEmploymentHistoryHandler(index: number) {
    let tempEmploymentHistory = [...cvs.employmentHistory];
    tempEmploymentHistory.splice(index, 1);
    dispatch(
      updateSection({
        sectionKey: 'employmentHistory',
        section: tempEmploymentHistory,
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
        sectionKey: 'employmentHistory',
        text: e.target.value,
      }),
    );
  }

  return {
    cvs,
    addAchievementHandler,
    removeAchievementHandler,
    addEmploymentHistoryHandler,
    removeEmploymentHistoryHandler,
    onChangeHandler,
  };
}
