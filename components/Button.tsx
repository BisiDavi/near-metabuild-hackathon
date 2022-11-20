/* eslint-disable @next/next/no-img-element */
import { ButtonProps } from '@/types/interfaces';

export default function Button({
  onClick,
  className,
  text,
  title = '',
  type = 'button',
  disabled = false,
  iconUrl,
}: ButtonProps) {
  return (
    <button
      title={title}
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {iconUrl && <img src={iconUrl} alt={iconUrl} className="mr-3 h-8" />} {text}
    </button>
  );
}
