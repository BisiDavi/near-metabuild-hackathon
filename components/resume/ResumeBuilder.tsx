'use client';
import DragWrapper from '@/components/resume/DragWrapper';
import displayElement from '@/lib/displayElement';
import useResumeBuilder from '@/hooks/useResumeBuilder';

export default function ResumeBuilder() {
  const { drop, elements } = useResumeBuilder();

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
              {displayElement(id, { style: {}, text: 'Hello David', src: '' })}
            </DragWrapper>
          );
        })}
      </div>
      <div className="relative h-full w-11/12 rounded-r-lg bg-white">
        <div className="border-r-none border-b-none absolute bottom-0 right-0 h-52 w-80 rounded-br-lg border bg-white"></div>
      </div>
    </section>
  );
}
