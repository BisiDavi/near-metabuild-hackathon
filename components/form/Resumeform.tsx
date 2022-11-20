import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import displayFormElement from '@/lib/displayFormElement';
import formContent from '@/json/form.json';

export default function Resumeform({ resume }: any) {
  const router = useRouter();
  const currentRoute = router.asPath;
  const resumeType = currentRoute.split("/template/")[1];
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
    <form className="resumeform h-3/4 overflow-y-scroll">
      <h4>
        Stage {formCurrentStage}: {formContent[formStage].title}
      </h4>
      {formContent[formStage].form.map((formItem, index) => (
        <div key={index} className="flex w-full space-x-2">
          {formItem.map((item) => (
            <div key={item.name} className="h-2/5 w-full overflow-y-scroll">
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
        {formCurrentStage === 6 ? (
          <Link
            href={`/payment?template=${resumeType}`}
            className="my-4 mx-auto flex rounded-md rounded bg-green-400 px-4 py-1 text-white hover:bg-opacity-80"
          >
            Next →
          </Link>
        ) : (
          <Button
            className={`${disabledNextClassname} rounded bg-blue-500 px-4 py-1 hover:bg-opacity-80`}
            onClick={nextStageHandler}
            text="Next →"
            disabled={disabledNext}
          />
        )}
      </div>
    </form>
  );
}
