interface Props {
  style: {
    type: 'dotted' | 'bold';
  };
}

export default function Separator({ style }: Props) {
  const { type } = style;
  return (
    <>
      <hr className={type} />
    </>
  );
}
