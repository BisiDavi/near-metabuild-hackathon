import { PropsWithChildren } from 'react';

interface Props {
  style: {
    height: number;
    width: number;
    color: string;
    backgroundColor: string;
    placeholder: string;
  };
}

export default function Square({ style, children }: PropsWithChildren<Props>) {
  return <div className="square" style={style}>{children}</div>;
}
