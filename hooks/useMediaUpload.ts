import axios from 'axios';
import { useRef } from 'react';

import useToast from '@/hooks/useToast';
import { useAppDispatch } from './useRedux';
import { updateProfileImage } from '@/redux/resume-slice';

export default function useMediaUpload() {
  const toastID = useRef(null);
  const dispatch = useAppDispatch();
  const { updateToast, loadingToast } = useToast();

  function uploadImage(image: any) {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('api_key', `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`);
    formData.append('upload_preset', 'near-resume');

    console.log('formData');

    return axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
    );
  }

  function uploadMedia(mediaItem: any[], type: string) {
    loadingToast(toastID);
    return uploadImage(mediaItem)
      .then((response) => {
        console.log('upload-response', response.data);
        if (type === 'profile') {
          dispatch(updateProfileImage(response.data.secure_url));
        }
        updateToast(toastID, 'success', 'image upload, successful');
      })
      .catch((err) => {
        console.log('image-upload-err', err);
        return updateToast(toastID, 'error', 'upload error');
      });
  }

  return { uploadMedia, uploadImage };
}
