/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import useNav from '@/hooks/useNav';
import useFirebase from '@/hooks/useFirebase';
import { reviewerProfileFormSchema } from '@/components/form/schema/reviewerProfileFormSchema';

export default function useReviewProfileform() {
  const { authData } = useNav();
  const { writeData } = useFirebase();

  const [reviewerImage, setReviewImage] = useState({
    previewImage: '',
    mainImage: '',
  });
  const [niche, setNiche] = useState([]);
  const [uploadImage, setUploadImage] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string } | null>(
    null,
  );

  const defaultfullName = authData?.displayName ? authData?.displayName : '';
  const defaultEmail = authData?.email ? authData?.email : '';

  const methods = useForm({
    resolver: yupResolver(reviewerProfileFormSchema),
  });

  function onSubmitHandler(data: any) {
    setUploadImage(true);
    setFormData({
      ...data,
      niche,
      type: 'reviewer',
    });
  }

  useEffect(() => {
    if (formData && reviewerImage.mainImage)
      writeData(
        JSON.stringify({
          ...formData,
          image: reviewerImage.mainImage,
        }),
        `/profiles/${authData?.uid}`,
      )
        .then(() => {
          toast.success('profile created');
        })
        .catch((error) => {
          console.log('error', error);
          toast.error('error creating profile');
        });
  }, [uploadImage, formData, reviewerImage.mainImage]);

  const setStates = {
    setReviewImage,
    setNiche,
    setUploadImage,
  };
  const data = {
    uploadImage,
    defaultEmail,
    defaultfullName,
    niche,
    reviewerImage,
  };

  const handlers = {
    onSubmitHandler,
  };

  return {
    setStates,
    handlers,
    methods,
    data,
  };
}
