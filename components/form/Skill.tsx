'use client';
import { useState } from 'react';

import { skillType } from '@/types';

export default function Skill() {
  const [skills, setSkills] = useState<skillType>([
    { name: 'skill-0', placeholder: 'Skill 1, 100%', type: 'input' },
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

  return (
    <>
      <p className="text-xs">
        Write a skill, and a percentage. <br /> eg. Multitasking Skill, 80%{' '}
      </p>
      {skills.map((skill) => (
        <input
          key={skill.name}
          name={skill.name}
          className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
          placeholder={skill.placeholder}
        />
      ))}
      <button
        className="item-center flex h-10 w-10 justify-center rounded-full bg-green-500 text-3xl text-white"
        type="button"
        onClick={addSkillsHandler}
      >
        +
      </button>
    </>
  );
}
