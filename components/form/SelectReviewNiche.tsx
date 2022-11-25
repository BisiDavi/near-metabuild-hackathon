import AsyncCreatableSelect from 'react-select/async-creatable';

import useSelectReviewNiche from '@/hooks/useSelectReviewNiche';

export default function SelectReviewNiche({ niches, setNiches }: any) {
  const {
    selectHandler,
    onCreateHandler,
    promiseOptions,
    defaultOptions,
    isLoading,
  } = useSelectReviewNiche(setNiches);

  return (
    <div className="nicheDropdown flex items-center">
      <label
        className="flex items-center border-b border-white bg-gray-200 px-3 py-4 font-bold text-gray-900"
        htmlFor="nicheDropdown"
      >
        Category
      </label>
      <AsyncCreatableSelect
        id="nicheDropdown"
        className="w-3/4"
        classNamePrefix="nicheDropdown"
        placeholder="Select Review Niche"
        cacheOptions
        value={niches}
        isClearable
        isLoading={isLoading}
        onCreateOption={onCreateHandler}
        onChange={selectHandler}
        defaultOptions={defaultOptions}
        loadOptions={promiseOptions}
      />
      <style jsx>
        {`
          .nicheDropdown {
            width: 100%;
            height: 50px;
          }
          .nicheDropdown label {
            width: 227px;
            height: 50px;
          }
          .nicheDropdown select {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
