'use client';
import useResumeBuilder from '@/hooks/useResumeBuilder';
import DragWrapper from '@/components/resume/DragWrapper';
import ResumeDocument from '@/components/resume/ResumeDocument';
import displayElement from '@/lib/displayElement';

export default function ResumeBuilder() {
  const { drop, elements } = useResumeBuilder();

  console.log('elements', elements);

  return (
    <section
      ref={drop}
      className="flex h-screen items-center rounded-lg border bg-white shadow"
    >
      <div className="grid h-full w-1/12 grid-cols-1 grid-rows-6 rounded-l-lg border-r bg-white shadow">
        {Object.keys(elements).map((item) => {
          const { left, top, id } = elements[item];
          return (
            <DragWrapper key={id} id={id} position={{ left, top }}>
              {displayElement(id, {
                style: { color: 'red' },
                text: 'Hello David',
                src: '',
              })}
            </DragWrapper>
          );
        })}
      </div>
      <div className="relative mx-auto flex h-full w-11/12 justify-center rounded-r-lg bg-white">
        {/* <ResumeDocument /> */}
        <div className="border-r-none border-b-none absolute bottom-0 right-0 h-52 w-80 rounded-br-lg border bg-white"></div>
      </div>
    </section>
  );
}
