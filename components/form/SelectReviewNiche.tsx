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
    <div className="nicheDropdown mb-4 flex flex-col items-start">
      <label className="mt-2" htmlFor="nicheDropdown">
        Your Review Niche
      </label>
      <AsyncCreatableSelect
        id="nicheDropdown"
        className="w-full"
        classNamePrefix="nicheDropdown"
        placeholder="Select / Create Review Niche"
        cacheOptions
        value={niches}
        isClearable
        isMulti={true}
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
          }
          .nicheDropdown select {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
