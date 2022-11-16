'use client';
import { useState } from 'react';

import { skillType } from '@/types';

export default function Skill() {
  const [skills, setSkills] = useState<skillType>([
    { name: 'skill-0', placeholder: 'skill,100%', type: 'input' },
  ]);

  function addSkillsHandler() {
    setSkills((prevState) => {
      const skillLength = prevState.length + 1;
      return [
        ...prevState,
        {
          name: `skill-${skillLength}`,
          placeholder: 'skill,100%',
          type: 'input',
        },
      ];
    });
  }

  return (
    <div>
      {skills.map((skill) => (
        <input
          key={skill.name}
          name={skill.name}
          className="my-2 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
          placeholder={skill.placeholder}
        />
      ))}
      <button
        className="h-10 w-10 rounded-full bg-green-500 text-3xl text-white"
        onClick={addSkillsHandler}
      >
        +
      </button>
    </div>
  );
}
