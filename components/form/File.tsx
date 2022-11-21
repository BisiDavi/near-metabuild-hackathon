import useMediaUpload from '@/hooks/useMediaUpload';
import type { FormElementProps } from '@/types/interfaces';

export default function File({ input }: FormElementProps) {
  const { uploadMedia } = useMediaUpload();

  function onClickHandler(e: any) {
    if (e.target.files) {
      // const imageData = URL.createObjectURL(e.target.files[0]);
      uploadMedia(e.target.files[0], 'profile');
    }
  }

  return (
    <>
      <p className="mb-0">Upload your profile picture</p>
      <input
        type="file"
        name={input.name}
        className="my-1 w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
        onChange={onClickHandler}
      />
    </>
  );
}
