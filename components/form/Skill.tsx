'use client';
import { useState, useEffect } from 'react';

import { skillType } from '@/types';
import Button from '@/components/Button';

export default function Skill() {
  const [skills, setSkills] = useState<skillType>([
    { name: 'skill-1', placeholder: 'Skill 1, 100%', type: 'input' },
  ]);

  function addSkillsHandler() {
    setSkills((prevState) => {
      const skillLength = prevState.length + 1;
      return [
        ...prevState,
        {
          name: `skill-${skillLength}`,
          placeholder: `Skill ${skillLength}, 100%`,
          type: 'input',
        },
      ];
    });
  }

  let tempSkill = skills;
  function removeSkillsHandler(name: string) {
    if (tempSkill.length > 1) {
      const skillIndex = tempSkill.findIndex((item) => item.name === name);
      tempSkill.splice(skillIndex, 1);
      console.log('tempSkill', tempSkill);
      return setSkills(tempSkill);
    }
  }

  console.log('skill', skills);

  const disableButton = skills.length > 1 ? false : true;

  return (
    <>
      <p className="text-xs">
        Write a skill, and a percentage. <br /> eg. Multitasking Skill, 80%{' '}
      </p>
      {skills.map((skill) => (
        <div key={skill.name} className="input-group flex">
          <input
            name={skill.name}
            className="my-2 h-10 w-full rounded-l-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            placeholder={skill.placeholder}
          />
          <Button
            className="item-center mt-2 flex h-10 w-10 justify-center rounded-r bg-red-500 text-3xl text-white"
            type="button"
            onClick={() => removeSkillsHandler(skill.name)}
            text="⤬"
            disabled={disableButton}
          />
        </div>
      ))}
      <Button
        className="item-center mt-2 flex h-10 w-10 justify-center rounded-full bg-green-500 text-3xl text-white"
        type="button"
        onClick={addSkillsHandler}
        text="+"
      />
    </>
  );
}
