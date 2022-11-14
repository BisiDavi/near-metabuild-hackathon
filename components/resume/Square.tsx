import { PropsWithChildren } from 'react';

interface Props {
  style: {
    height: number;
    width: number;
    color: string;
    backgroundColor: string;
  };
}

export default function Square({ style, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <div className="square">{children}</div>
    </div>
  );
}
