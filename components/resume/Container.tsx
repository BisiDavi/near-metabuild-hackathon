import { PropsWithChildren } from 'react';

interface Props {
  style: {
    display: 'flex' | 'block';
  };
}
export default function Container({
  children,
  style,
}: PropsWithChildren<Props>) {
  return <div style={style}>{children}</div>;
}
