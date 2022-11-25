/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { FormProvider } from 'react-hook-form';
import { Fragment } from 'react';

import displayFormElements from '@/components/Dashboard/formElements/displayFormElements';
import File from '@/components/form/File';
import SelectReviewNiche from '@/components/form/SelectReviewNiche';
import useReviewProfileform from '@/hooks/useReviewProfileform';
import reviewProfile from '@/json/reviewerprofile.json';

export default function ReviewerProfileForm() {
  const { handlers, methods, setStates, data } = useReviewProfileform();
  const { onSubmitHandler } = handlers;
  const { setReviewImage, setSubmit, setNiche } = setStates;
  const { submit, defaultEmail, defaultfullName, niche, reviewerImage } = data;

  const { handleSubmit } = methods;

  console.log('reviewerImage', reviewerImage);

  return (
    <>
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
                  <>
                    <File
                      input={item}
                      setImage={setReviewImage}
                      reviewerImage={reviewerImage}
                      submit={submit}
                      setSubmit={setSubmit}
                    />
                    {reviewerImage?.previewImage && (
                      <img
                        src={reviewerImage.previewImage}
                        alt="preview image"
                        className="h-20 w-20"
                      />
                    )}
                  </>
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
    </>
  );
}
