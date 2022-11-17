import Button from '@/components/Button';
import useEducation from '@/hooks/useEducation';

export default function Education() {
  const {
    cvs,
    addEducationHandler,
    deleteEducationHandler,
    getInputValue,
    removeAchievementHandler,
    addAchievementHandler,
    onChangeHandler,
  } = useEducation();

  return (
    <div className="rounded border p-4">
      {cvs.education.map((educationItem, index) => {
        return (
          <div
            className="education-item relative my-4 rounded border p-3"
            key={index}
          >
            {educationItem.map((educationGroup, idx) => {
              const groupClassname = idx === 2 ? 'flex-col' : 'space-x-2';
              return (
                <div
                  className={`education-group ${groupClassname} flex`}
                  key={idx}
                >
                  {educationGroup.map((item, itemIdx) => {
                    const inputClassname = item.name.includes('achievement')
                      ? 'rounded-l-md'
                      : 'rounded-md';
                    const inputValue = getInputValue(index, idx, itemIdx);
                    return (
                      <div
                        className="item-group my-1 flex w-full"
                        key={item.id}
                      >
                        <input
                          className={`${inputClassname} h-8 w-full rounded-l-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm`}
                          name={item.name}
                          value={inputValue}
                          placeholder={item.placeholder}
                          onChange={(e) =>
                            onChangeHandler(e, index, idx, itemIdx)
                          }
                        />
                        {item.name.includes('achievement') && (
                          <Button
                            className="flex h-8 w-8 items-center justify-center rounded-r bg-red-500 text-center text-2xl text-white hover:bg-opacity-70"
                            type="button"
                            text="⤬"
                            title="remove achievement"
                            onClick={() =>
                              removeAchievementHandler(index, itemIdx)
                            }
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <Button
              className="absolute -right-6 -top-5 z-10 mx-4 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-2xl text-white hover:bg-opacity-70"
              type="button"
              onClick={() => deleteEducationHandler(index)}
              title="Remove Education History"
              text="⤬"
            />
            <div className="group mt-2 flex">
              <Button
                className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-center text-2xl text-white hover:bg-opacity-70"
                type="button"
                onClick={() => addAchievementHandler(index)}
                title="Add Achievement"
                text="+"
              />
              <p className="ml-1 mt-1 mb-0 text-sm font-bold">
                Add Achievement
              </p>
            </div>
          </div>
        );
      })}
      <div className="group flex items-center">
        <Button
          className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-center text-2xl text-white hover:bg-opacity-70"
          type="button"
          onClick={addEducationHandler}
          title="Add Education"
          text="+"
        />
        <p className="ml-1 mt-2 mb-0 text-sm font-bold">Add Education</p>
      </div>
    </div>
  );
}
