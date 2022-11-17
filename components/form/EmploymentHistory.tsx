import { useAppSelector } from '@/hooks/useRedux';
import Button from '../Button';

export default function EmploymentHistory() {
  const { cvs } = useAppSelector((state) => state.builder);
  return (
    <>
      <div className="h-5/6 overflow-y-scroll">
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
                    {itemGroup.map((item) => (
                      <input
                        key={`${item.id}-${index}`}
                        name={item.name}
                        placeholder={item.placeholder}
                        className="my-1 h-10 w-full rounded border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Button
        className="item-center mt-2 flex h-10 w-10 justify-center rounded-full bg-green-500 text-3xl text-white"
        type="button"
        onClick={() => null}
        title="Add new Employment History"
        text="+"
      />
    </>
  );
}
