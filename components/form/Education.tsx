import { useAppSelector } from '@/hooks/useRedux';
import Button from '../Button';

export default function Education() {
  const { cvs } = useAppSelector((state) => state.builder);

  return (
    <div className='border p-4 rounded'>
      {cvs.education.map((educationItem, index) => {
        return (
          <div className="education-item border my-3 p-3 rounded" key={index}>
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
          </div>
        );
      })}
    </div>
  );
}
