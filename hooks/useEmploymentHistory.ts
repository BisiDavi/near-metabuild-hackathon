import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import {
  removeAchievement,
  updateAchievement,
  updateSectionText,
} from '@/redux/builder-slice';

export default function useEmploymentHistory() {
  const { cvs } = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

  function addAchievementHandler(index: number) {
    const achievementLength = cvs.education[index][2].length + 1;
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

  function addEmploymentHistoryHandler() {}
  function removeEmploymentHistoryHandler() {}

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
