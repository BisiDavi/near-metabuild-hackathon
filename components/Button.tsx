import { ButtonProps } from '@/types/interfaces';

export default function Button({
  onClick,
  className,
  text,
  title = '',
  type = 'button',
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
