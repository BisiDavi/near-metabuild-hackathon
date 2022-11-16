import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@/components/Button';
import displayFormElement from '@/lib/displayFormElement';
import formContent from '@/json/form.json';

export default function Resumeform({ resume }: any) {
  const methods = useForm({
    // resolver: yupResolver(adminProductSchema),
    mode: 'all',
  });
  const {
    formCurrentStage,
    formStage,
    prevStageHandler,
    nextStageHandler,
    disabledNext,
    disabledPrev,
    disabledNextClassname,
    disabledPrevClassname,
  } = resume;

  return (
    <FormProvider {...methods}>
      <form>
        <h4>
          Stage {formCurrentStage}: {formContent[formStage].title}
        </h4>
        {formContent[formStage].form.map((formItem, index) => (
          <div key={index} className="flex w-full space-x-2">
            {formItem.map((item) => (
              <div key={item.name} className="w-full">
                {displayFormElement(item)}
              </div>
            ))}
          </div>
        ))}
        <div className="button-group mt-4 flex items-center justify-between text-white">
          <Button
            className={`${disabledPrevClassname} rounded bg-gray-500 px-4 py-1 hover:bg-opacity-80`}
            type="button"
            onClick={prevStageHandler}
            text="← Previous"
            disabled={disabledPrev}
          />
          <Button
            className={`${disabledNextClassname} rounded bg-blue-500 px-4 py-1 hover:bg-opacity-80`}
            type="button"
            onClick={nextStageHandler}
            text="Next →"
            disabled={disabledNext}
          />
        </div>
      </form>
    </FormProvider>
  );
}