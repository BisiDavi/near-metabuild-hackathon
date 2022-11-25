/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

import useNicheMutation from '@/hooks/useNicheMutation';
import useFirebase from './useFirebase';
import toSlug from '@/lib/toSlug';

type defaultOptionsType = Array<{ label: string; value: string }>;

export default function useSelectReviewNiche(setNiches: any) {
  const { mutate, isLoading } = useNicheMutation();
  const { readDbData } = useFirebase();

  const queryClient = useQueryClient();
  const [defaultOptions, setDefaultOptions] = useState<defaultOptionsType>([
    { label: 'None', value: 'NONE' },
  ]);

  async function getReviewNiche() {
    const result: any = await readDbData('/niche');
    console.log('result-getReviewNiche', result);
    return result;
  }
  const { data, status } = useQuery(['getReviewNiche'], () => getReviewNiche());

  console.log('data-getReviewNicheuseQuery', data);

  function getCategories() {
    let defaultOptionsArray = [{ label: 'None', value: 'NONE' }];
    data?.data.map((itemData: any) => {
      defaultOptionsArray.push({
        label: itemData,
        value: toSlug(itemData),
      });
    });
    return defaultOptionsArray;
  }

  useMemo(() => {
    if (status === 'success') {
      const defaultOptionsArray = getCategories();
      setDefaultOptions(defaultOptionsArray);
    }
  }, [status]);

  const filterCategories = (inputValue: string) => {
    return defaultOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const promiseOptions: any = (inputValue: string) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterCategories(inputValue));
      }, 1000);
    });

  function selectHandler(inputValue: any) {
    setNiches((prevValue: any) => [...prevValue, inputValue]);
  }

  function onCreateHandler(inputValue: any) {
    console.log('inputValue', inputValue);
    mutate(inputValue, {
      onSuccess: (data: any) => {
        console.log('data', data);
        // setNiches({
        //   label: parsedData.categoryData.name,
        //   value: parsedData.id,
        // });
        queryClient.invalidateQueries(['getReviewNiche']);
      },
    });
  }

  return {
    onCreateHandler,
    selectHandler,
    defaultOptions,
    promiseOptions,
    isLoading,
  };
}
