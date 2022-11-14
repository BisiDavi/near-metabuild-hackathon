import Image from 'next/image';

interface Props {
  image: string;
  name: string;
}

export default function ProfilePicture({ image, name }: Props) {
  return (
    <>
      <Image src={image} alt={name} />
    </>
  );
}
