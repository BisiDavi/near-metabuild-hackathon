'use client';

import { useState } from 'react';

import formContent from '@/json/form.json';
import displayFormElement from '@/lib/displayFormElement';

export default function ResumeEditor() {
  const [formStage, setFormStage] = useState<number>(0);

  function formStageHandler(type: 'prev' | 'next') {
    const formStageState = (prevState: number) =>
      type === 'prev' ? prevState - 1 : prevState + 1;
    if (formStage > 0) {
      setFormStage((prevState) => formStageState(prevState));
    }
  }

  return (
    <aside className="mr-6">
      <h5 className="text-center text-xl font-bold">Edit Resume</h5>
      <form>
        <h4>{formContent[formStage].title}</h4>
        {formContent[formStage].form.map((formItem, index) => (
          <div key={index} className="flex">
            {formItem.map((item) => displayFormElement(item))}
          </div>
        ))}
        <div className="button-group mt-4 flex items-center justify-between text-white">
          <button
            className="rounded bg-gray-400 px-4 py-1 hover:bg-opacity-80"
            onClick={() => formStageHandler('prev')}
          >
            Previous
          </button>
          <button
            className="rounded bg-blue-400 px-4 py-1 hover:bg-opacity-80"
            onClick={() => formStageHandler('next')}
          >
            Next
          </button>
        </div>
      </form>
    </aside>
  );
}
