import { ButtonProps } from '@/types/interfaces';

export default function Button({
  onClick,
  className,
  type,
  text,
}: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
