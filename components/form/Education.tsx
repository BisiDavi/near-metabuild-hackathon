import { useAppSelector } from '@/hooks/useRedux';
import Button from '@/components/Button';

export default function Education() {
  const { cvs } = useAppSelector((state) => state.builder);

  return (
    <div className="rounded border p-4">
      {cvs.education.map((educationItem, index) => {
        return (
          <div
            className="education-item relative my-4 rounded border p-3"
            key={index}
          >
            {educationItem.map((educationGroup, idx) => {
              return (
                <div className="education-group flex space-x-2" key={idx}>
                  {educationGroup.map((item) => {
                    const inputClassname = item.name.includes('achievement')
                      ? 'rounded-l-md'
                      : 'rounded-md';
                    return (
                      <div
                        className="item-group my-1 flex w-full"
                        key={item.id}
                      >
                        <input
                          className={`${inputClassname} h-8 w-full rounded-l-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm`}
                          name={item.name}
                          placeholder={item.placeholder}
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
              className="absolute -right-6 -top-5 z-10 mx-4 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-2xl text-white hover:bg-opacity-70"
              type="button"
              onClick={() => null}
              title="Remove Employment History"
              text="⤬"
            />
          </div>
        );
      })}
      <div className="group flex items-center">
        <Button
          className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-center text-2xl text-white hover:bg-opacity-70"
          type="button"
          onClick={() => null}
          title="Add Achievement"
          text="+"
        />
        <p className="ml-1 mt-2 mb-0 text-sm font-bold">Add Education</p>
      </div>
    </div>
  );
}
