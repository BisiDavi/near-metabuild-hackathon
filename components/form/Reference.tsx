import { useAppSelector } from '@/hooks/useRedux';
import Button from '@/components/Button';
import useReference from '@/hooks/useReference';

export default function Reference() {
  const { cvs } = useAppSelector((state) => state.builder);
  const {
    getInputValue,
    addReferenceHandler,
    removeReferenceHandler,
    disableDelete,
    disableDeleteClassname,
    onChangeHandler,
  } = useReference();

  return (
    <div className="rounded border p-4 my-2">
      {cvs.references.map((referenceGroup, index) => {
        return (
          <div className="group relative my-4 rounded border p-2" key={index}>
            {referenceGroup.map((item, idx) => {
              const inputValue = getInputValue(index, idx);
              console.log('inputValue', inputValue);
              return (
                <div className="input-group my-2" key={idx}>
                  <input
                    className="h-8 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                    name={item.name}
                    placeholder={item.placeholder}
                    value={inputValue}
                    onChange={(e) =>
                      onChangeHandler(index, idx, e.target.value)
                    }
                  />
                </div>
              );
            })}
            <Button
              className={`${disableDeleteClassname} absolute -right-6 -top-5 z-10 mx-4 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-2xl text-white hover:bg-opacity-70`}
              type="button"
              onClick={() => removeReferenceHandler(index)}
              title="Remove Reference"
              text="⤬"
              disabled={disableDelete}
            />
          </div>
        );
      })}
      <div className="group flex items-center">
        <Button
          className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-center text-2xl text-white hover:bg-opacity-70"
          type="button"
          onClick={addReferenceHandler}
          title="Add Reference"
          text="+"
        />
        <p className="ml-1 mt-2 mb-0 text-sm font-bold">Add Reference</p>
      </div>
    </div>
  );
}
