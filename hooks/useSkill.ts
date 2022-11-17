import Button from '@/components/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import useReduxForm from '@/hooks/useReduxForm';
import { updateCV, updateSkill } from '@/redux/builder-slice';

export default function useSkill() {
  const { cvs } = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();
  const { getInputValue } = useReduxForm();

  function addCVSkillHandler() {
    const skillLength = cvs.skills.length + 1;
    dispatch(
      updateCV({
        ...cvs,
        skills: [
          ...cvs.skills,
          {
            name: `skill-${skillLength}`,
            placeholder: `Skill ${skillLength}, 100%`,
            type: 'input',
            text: '',
            percentage: '',
            id: `skills.skill-${skillLength}`,
          },
        ],
      }),
    );
  }

  function removeCVSkillsHandler(name: string) {
    let tempSkills = [...cvs.skills];
    if (cvs.skills.length > 1) {
      const skillIndex = tempSkills.findIndex((item) => item.name === name);
      tempSkills.splice(skillIndex, 1);
      dispatch(updateCV({ ...cvs, skills: tempSkills }));
    }
  }

  function onChangeHandler(e: any, index: number) {
    dispatch(updateSkill({ text: e.target.value, index }));
  }

  const disableButton = cvs.skills.length > 1 ? false : true;
  const disableClassname = cvs.skills.length > 1 ? '' : 'cursor-not-allowed';

  return {
    cvs,
    disableClassname,
    disableButton,
    removeCVSkillsHandler,
    onChangeHandler,
    addCVSkillHandler,
    getInputValue,
  };
}
