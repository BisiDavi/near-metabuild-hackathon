import { useAppSelector } from '@/hooks/useRedux';
import Button from '@/components/Button';

export default function EmploymentHistory() {
  const { cvs } = useAppSelector((state) => state.builder);
  return (
    <div className="rounded border p-4">
      <div className="overflow-y-scroll">
        {cvs.employmentHistory.map((history, index) => {
          return (
            <div
              className="history relative my-3 rounded-lg border p-3"
              key={index}
            >
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
                            className={`${inputClassname} h-8 w-full rounded-l-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm`}
                          />
                          {item.name.includes('achievement') && (
                            <Button
                              className="flex h-8 w-8 items-center justify-center rounded-r bg-red-500 text-center text-2xl text-white hover:bg-opacity-70"
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
              <Button
                className="absolute -right-4 -top-4 z-10 mx-4 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-2xl text-white hover:bg-opacity-70"
                type="button"
                onClick={() => null}
                title="Remove Employment History"
                text="⤬"
              />
              <div className="group flex items-center">
                <Button
                  className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-center text-2xl text-white hover:bg-opacity-70"
                  type="button"
                  onClick={() => null}
                  title="Add Achievement"
                  text="+"
                />
                <p className="ml-1 mt-2 mb-0 text-sm font-bold">
                  Add Achievement
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="group flex items-center">
        <Button
          className="flex h-8 w-8 items-center justify-center rounded bg-blue-500 text-3xl text-white hover:bg-opacity-70"
          type="button"
          onClick={() => null}
          title="Add new Employment History"
          text="+"
        />
        <p className="ml-1 mb-0 text-sm font-bold">
          Add new Employment History
        </p>
      </div>
    </div>
  );
}
