interface Props {
  style: {
    type: 'dotted' | 'bold';
    color: string;
  };
}

export default function Separator({ style }: Props) {
  return <hr style={style} />;
}
