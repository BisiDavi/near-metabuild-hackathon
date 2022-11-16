'use client';
import useResumeEditor from '@/hooks/useResumeEditor';
import Button from '@/components/Button';
import displayFormElement from '@/lib/displayFormElement';
import formContent from '@/json/form.json';

export default function ResumeEditor() {
  const {
    currentStage,
    formCurrentStage,
    formStage,
    prevStageHandler,
    nextStageHandler,
  } = useResumeEditor();

  return (
    <aside className="mr-6">
      <h5 className="text-center text-xl font-bold">Edit Resume</h5>
      <div className="outer my-4 h-4 w-full rounded-full bg-gray-500">
        <div
          className="inner h-4 rounded-full bg-green-500"
          style={{ width: `${currentStage}%` }}
        ></div>
      </div>
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
            className="rounded bg-gray-500 px-4 py-1 hover:bg-opacity-80"
            type="button"
            onClick={prevStageHandler}
            text="← Previous"
          />
          <Button
            className="rounded bg-blue-500 px-4 py-1 hover:bg-opacity-80"
            type="button"
            onClick={nextStageHandler}
            text="Next →"
          />
        </div>
      </form>
    </aside>
  );
}
