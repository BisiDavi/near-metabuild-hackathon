import { useState } from 'react';
import formContent from '@/json/form.json';

export default function useResumeEditor() {
  const [formStage, setFormStage] = useState<number>(0);

  const formStageLimit = formContent.length - 1;

  function nextStageHandler() {
    if (formStage < formStageLimit) {
      setFormStage((prevState) => prevState + 1);
    }
  }

  function prevStageHandler() {
    if (formStage > 0) {
      setFormStage((prevState) => prevState - 1);
    }
  }

  const formCurrentStage = formStage + 1;

  const currentStage = (formCurrentStage / formContent.length) * 100;

  return {
    currentStage,
    formCurrentStage,
    formStage,
    prevStageHandler,
    nextStageHandler,
  };
}
