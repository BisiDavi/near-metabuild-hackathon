import { useRouter } from 'next/router';

import useMediaUpload from '@/hooks/useMediaUpload';

interface Props {
  input: { name: string; placeholder: string; label?: string };
  setImage?: any;
  submit?: boolean;
}

export default function File({ input, setImage, submit }: Props) {
  const { uploadMedia } = useMediaUpload();
  const router = useRouter();
  const templateId = router.asPath.split('/template/')[1];

  function onClickHandler(e: any) {
    const labelType = !input?.label ? 'profile' : '';
    if (e.target.files) {
      uploadMedia(e.target.files[0], labelType).then((response) => {
        if (setImage) {
          setImage({
            main: response,
            preview: '',
          });
        }
      });
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
