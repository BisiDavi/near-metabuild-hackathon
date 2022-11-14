interface Props {
  text: string;
  style: {
    type: 'title' | 'text';
    size: 'sm' | 'lg' | 'xl';
    color: string;
    style: 'italics' | 'monospaced';
  };
}
export default function Text({ text, style }: Props) {
  const { type, size } = style;
  const textClassname = type === 'title' ? 'font-bold' : 'font-normal';
  return <p className={`${textClassname} ${size}`}>{text}</p>;
}
