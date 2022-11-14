interface Props {
  style: {
    type: 'dotted' | 'bold';
    color: string;
  };
}

export default function Separator({ style }: Props) {
  const { type, color } = style;
  return (
    <>
      <hr className={type} style={{ color }} />
    </>
  );
}
