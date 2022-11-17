import { ButtonProps } from '@/types/interfaces';

export default function Button({
  onClick,
  className,
  type,
  text,
  title = '',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      title={title}
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
