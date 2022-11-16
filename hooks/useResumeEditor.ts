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

  const disabledNext = formStage === formStageLimit ? true : false;
  const disabledPrev = formStage <= 0 ? true : false;

  const disabledNextClassname = disabledNext ? 'cursor-not-allowed' : '';
  const disabledPrevClassname = disabledPrev ? 'cursor-not-allowed' : '';

  return {
    currentStage,
    formCurrentStage,
    formStage,
    prevStageHandler,
    nextStageHandler,
    disabledNext,
    disabledPrev,
    disabledNextClassname,
    disabledPrevClassname,
  };
}
