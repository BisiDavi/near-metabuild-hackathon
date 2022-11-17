import { useAppSelector } from '@/hooks/useRedux';
import Button from '@/components/Button';
import { group } from 'console';

export default function EmploymentHistory() {
  const { cvs } = useAppSelector((state) => state.builder);
  return (
    <>
      <div className="overflow-y-scroll">
        {cvs.employmentHistory.map((history, index) => {
          return (
            <div className="history my-3 rounded-lg border p-3" key={index}>
              {history.map((itemGroup, idx) => {
                const inputGroupClassname =
                  itemGroup.length === 2 ? 'flex space-x-2' : 'flex flex-col';

                return (
                  <div
                    className={`item-group ${inputGroupClassname}`}
                    key={idx}
                  >
                    {itemGroup.map((item) => {
                      const inputClassname = item.name.includes('achievement')
                        ? 'rounded-l-md'
                        : 'rounded-md';
                      return (
                        <div
                          key={`${item.id}-${index}`}
                          className="input-group my-1 flex"
                        >
                          <input
                            name={item.name}
                            placeholder={item.placeholder}
                            className={`${inputClassname} h-10 w-full rounded-l-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm`}
                          />
                          {item.name.includes('achievement') && (
                            <Button
                              className="item-center flex h-10 w-10 justify-center rounded-r bg-red-500 text-center text-3xl text-white hover:bg-opacity-70"
                              type="button"
                              text="⤬"
                              onClick={() => null}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="button-group">
                <div className="group flex">
                  <Button
                    className="mr-4 mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-center text-3xl text-white hover:bg-opacity-70"
                    type="button"
                    onClick={() => null}
                    title="Add Achievement"
                    text="+"
                  />
                </div>
                Add Achievement
              </div>
            </div>
          );
        })}
      </div>
      <div className="add-employment-history flex flex-col">
        <div className="group flex">
          <Button
            className="mr-4 mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-3xl text-white hover:bg-opacity-70"
            type="button"
            onClick={() => null}
            title="Add new Employment History"
            text="+"
          />
          <Button
            className="mx-4 mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-3xl text-white hover:bg-opacity-70"
            type="button"
            onClick={() => null}
            title="Remove Employment History"
            text="+"
          />
        </div>
        <p className="ml-1 mt-2 mb-0 text-sm font-bold">
          Add/remove new Employment History
        </p>
      </div>
    </>
  );
}
