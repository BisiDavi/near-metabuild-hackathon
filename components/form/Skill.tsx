import Button from '@/components/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import useReduxForm from '@/hooks/useReduxForm';
import { updateCV } from '@/redux/builder-slice';

export default function Skill() {
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

  console.log('cvs.skills', cvs.skills);
  function removeCVSkillsHandler(name: string) {
    if (cvs.skills.length > 1) {
      const skillIndex = cvs.skills.findIndex((item) => item.name === name);
      console.log('skillIndex', skillIndex);
      cvs.skills.splice(skillIndex, 1);
    }
  }

  const disableButton = cvs.skills.length > 1 ? false : true;

  return (
    <>
      <p className="text-xs">
        Write a skill, and a percentage. <br /> eg. Multitasking Skill, 80%{' '}
      </p>
      {cvs.skills.map((skill, index) => {
        const inputValue = getInputValue(skill.id, index);
        console.log('skill.name', skill.name);
        return (
          <div key={skill.name} className="input-group flex">
            <input
              className="my-2 h-10 w-full rounded-l-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder={skill.placeholder}
              value={inputValue}
              name={skill.name}
            />
            <Button
              className="item-center mt-2 flex h-10 w-10 justify-center rounded-r bg-red-500 text-3xl text-white"
              type="button"
              onClick={() => removeCVSkillsHandler(skill.name)}
              text="⤬"
              disabled={disableButton}
            />
          </div>
        );
      })}
      <Button
        className="item-center mt-2 flex h-10 w-10 justify-center rounded-full bg-green-500 text-3xl text-white"
        type="button"
        onClick={addCVSkillHandler}
        text="+"
      />
    </>
  );
}
