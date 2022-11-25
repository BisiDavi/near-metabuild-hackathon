/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';

import useMediaUpload from '@/hooks/useMediaUpload';
import { useEffect, useState } from 'react';

interface Props {
  input: { name: string; placeholder: string; label?: string };
  setImage?: any;
  uploadImage?: boolean;
  reviewerImage?: any;
  setUploadImage?: any;
}

export default function File({
  input,
  setImage,
  setUploadImage,
  reviewerImage,
  uploadImage,
}: Props) {
  const { uploadMedia } = useMediaUpload();
  const [mediaFile, setMediaFile] = useState([]);
  const router = useRouter();
  const templateId = router.asPath.split('/template/')[1];

  useEffect(() => {
    if (uploadImage) {
      uploadMedia(mediaFile).then((response) => {
        setImage({
          ...reviewerImage,
          mainImage: response.secure_url,
        });
        setUploadImage(false);
      });
    }
  }, [uploadImage]);

  async function onClickHandler(e: any) {
    const labelType = !input?.label ? 'profile' : '';
    console.log('labelType', labelType);
    if (e.target.files) {
      if (setImage) {
        const previewImage = URL.createObjectURL(e.target.files[0]);
        setImage({
          previewImage,
          mainImage: null,
        });
        setMediaFile(e.target.files[0]);
      } else {
        uploadMedia(e.target.files[0], labelType);
      }
    }
  }

  const fileLabel = input?.label ? input?.label : 'Upload your profile picture';

  return (
    <>
      {(input.placeholder.includes(templateId) || input?.label) && (
        <>
          <p className="mb-0">{fileLabel}</p>
          <input
            type="file"
            name={input.name}
            className="my-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
            onChange={onClickHandler}
          />
        </>
      )}
    </>
  );
}
