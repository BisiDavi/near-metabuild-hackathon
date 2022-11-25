import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment, useState } from 'react';

import useNav from '@/hooks/useNav';
import { reviewerProfileFormSchema } from '@/components/form/schema/reviewerProfileFormSchema';
import displayFormElements from '@/components/Dashboard/formElements/displayFormElements';
import File from '@/components/form/File';
import SelectReviewNiche from '@/components/form/SelectReviewNiche';
import reviewProfile from '@/json/reviewerprofile.json';

export default function ReviewerProfileForm() {
  const { authData } = useNav();
  const [reviewerImage, setReviewImage] = useState('');
  const [niche, setNiche] = useState([]);
  const defaultfullName = authData?.displayName ? authData?.displayName : '';
  const defaultEmail = authData?.email ? authData?.email : '';

  const methods = useForm({
    resolver: yupResolver(reviewerProfileFormSchema),
  });
  const { handleSubmit } = methods;

  function onSubmitHandler(data: any) {
    console.log('data', data);
  }

  console.log('reviewerImage', reviewerImage);
  console.log('niche', niche);

  return (
    <FormProvider {...methods}>
      <form
        className="mt-3 flex w-2/3 flex-col rounded bg-gray-100 p-6 "
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        {reviewProfile.map((item: any) => {
          item['defaultValue'] =
            item.name === 'fullName'
              ? defaultfullName
              : item.name === 'email' && defaultEmail;

          return (
            <Fragment key={item.name}>
              {item.name !== 'profilePicture' ? (
                displayFormElements(item)
              ) : (
                <File input={item} setImage={setReviewImage} />
              )}
            </Fragment>
          );
        })}
        <SelectReviewNiche niche={niche} setNiches={setNiche} />
        <button
          type="submit"
          className="mx-auto w-24 rounded-lg border bg-blue-500 py-1 text-white hover:bg-opacity-70"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
}
