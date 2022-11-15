import Image from 'next/image';

interface Props {
  image: string;
}

export default function ProfilePicture({ image }: Props) {
  return (
    <div className="rounded-full">
      <Image src={image} alt={image} />
    </div>
  );
}
