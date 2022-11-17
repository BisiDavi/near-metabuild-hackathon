import Button from '@/components/Button';
import useSkill from '@/hooks/useSkill';

export default function Skill() {
  const {
    disableClassname,
    disableButton,
    cvs,
    removeCVSkillsHandler,
    onChangeHandler,
    addCVSkillHandler,
    getInputValue,
  } = useSkill();
  
  return (
    <>
      <p className="text-xs">
        Write a skill, and a percentage. <br /> eg. Multitasking Skill, 80%{' '}
      </p>
      {cvs.skills.map((skill, index) => {
        const inputValue = getInputValue(skill.id, index);
        const skillInputValue = index === 0 ? cvs.skills[0].text : inputValue;
        return (
          <div key={skill.name} className="input-group my-2 flex">
            <input
              className="h-10 w-full rounded-l-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder={skill.placeholder}
              value={skillInputValue}
              name={skill.name}
              onChange={(e) => onChangeHandler(e, index)}
            />
            <Button
              className={`${disableClassname} item-center flex h-10 w-10 justify-center rounded-r bg-red-500 text-center text-3xl text-white hover:bg-opacity-70`}
              type="button"
              text="⤬"
              disabled={disableButton}
              onClick={() => removeCVSkillsHandler(skill.name)}
            />
          </div>
        );
      })}
      <Button
        className="item-center mt-2 flex h-10 w-10 justify-center rounded-full bg-green-500 text-3xl text-white hover:bg-opacity-70"
        type="button"
        onClick={addCVSkillHandler}
        text="+"
      />
    </>
  );
}
