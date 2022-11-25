/* eslint-disable @next/next/no-img-element */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { toast } from 'react-toastify';

import useNav from '@/hooks/useNav';
import useFirebase from '@/hooks/useFirebase';
import { reviewerProfileFormSchema } from '@/components/form/schema/reviewerProfileFormSchema';

export default function useReviewProfileform() {
  const { authData } = useNav();
  const { writeData, readDbData } = useFirebase();

  const [reviewerImage, setReviewImage] = useState({
    previewImage: '',
    mainImage: '',
  });
  const [niche, setNiche] = useState([]);
  const [submit, setSubmit] = useState(false);

  const defaultfullName = authData?.displayName ? authData?.displayName : '';
  const defaultEmail = authData?.email ? authData?.email : '';

  const methods = useForm({
    resolver: yupResolver(reviewerProfileFormSchema),
  });

  async function getProfileHandler() {
    const result = await readDbData(`/profiles/${authData?.uid}`);
    return result;
  }

  function onSubmitHandler(data: any) {
    setSubmit(true);
    writeData(
      JSON.stringify({
        ...data,
        niche,
        ...reviewerImage,
        type: 'reviewer',
      }),
      `/profiles/${authData?.uid}`,
    )
      .then(() => toast.success('profile created'))
      .catch((error) => {
        console.log('error', error);
        toast.error('error creating profile');
      });
  }

  const setStates = {
    setReviewImage,
    setNiche,
    setSubmit,
  };
  const data = {
    submit,
    defaultEmail,
    defaultfullName,
    niche,
    reviewerImage,
  };

  const handlers = {
    getProfileHandler,
    onSubmitHandler,
  };

  return {
    setStates,
    handlers,
    methods,
    data,
  };
}
