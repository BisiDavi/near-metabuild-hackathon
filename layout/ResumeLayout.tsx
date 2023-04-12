import Overlay from '@/components/Overlay';
import { PropsWithChildren } from 'react';

interface Props {
  resumeEditor: JSX.Element;
  children: JSX.Element;
}

export default function ResumeLayout({
  resumeEditor,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      <Overlay />
      <div className="container mx-auto flex flex-col justify-center py-14 px-4 lg:h-screen lg:flex-row lg:px-0">
        <div className="w-full lg:w-3/12">{resumeEditor}</div>
        <div className="w-full lg:w-9/12">{children}</div>
      </div>
    </>
  );
}
