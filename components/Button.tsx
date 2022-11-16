import { ButtonProps } from '@/types/interfaces';

export default function Button({
  onClick,
  className,
  type,
  text,
  disabled = false,
}: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
