import { useRouter } from 'next/router';

import useMediaUpload from '@/hooks/useMediaUpload';
import type { FormElementProps } from '@/types/interfaces';

interface Props {
  input: FormElementProps['input'];
  label?: string;
  setImage?: any;
}

export default function File({ input, label, setImage }: Props) {
  const { uploadMedia } = useMediaUpload();
  const router = useRouter();
  const templateId = router.asPath.split('/template/')[1];

  function onClickHandler(e: any) {
    const labelType = !label ? 'profile' : '';
    if (e.target.files) {
      uploadMedia(e.target.files[0], labelType).then((response) => {
        if (setImage) {
          setImage(response);
        }
      });
    }
  }

  const fileLabel = label ? label : 'Upload your profile picture';

  return (
    <>
      {(input.placeholder.includes(templateId) || label) && (
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
