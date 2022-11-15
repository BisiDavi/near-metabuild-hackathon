'use client';
import DragWrapper from '@/components/resume/DragWrapper';
import ResumeDocument from '@/components/resume/ResumeDocument';
import useResumeBuilder from '@/hooks/useResumeBuilder';
import displayElement from '@/lib/displayElement';

export default function ResumeBuilder() {
  const { drop, elements } = useResumeBuilder();

  return (
    <section
      ref={drop}
      className="relative flex h-screen items-center rounded-lg border bg-white shadow"
    >
      <div className="grid h-full w-1/12 grid-cols-1 grid-rows-6 rounded-l-lg border-r bg-white shadow">
        {Object.keys(elements).map((item) => {
          const { left, top, id } = elements[item];
          return (
            <DragWrapper key={id} id={id} position={{ left, top }}>
              <div className="flex flex-col">
                <p>{id}</p>
                {displayElement(id, {
                  style: { color: 'red' },
                  text: 'Hello David',
                  src: '',
                })}
              </div>
            </DragWrapper>
          );
        })}
      </div>
      <div className="resume-view relative z-10 mx-auto flex h-full w-11/12 justify-center rounded-r-lg">
        {/* <ResumeDocument /> */}
        <div className="border-r-none border-b-none absolute bottom-0 right-0 h-52 w-80 rounded-br-lg border bg-white"></div>
      </div>
    </section>
  );
}
