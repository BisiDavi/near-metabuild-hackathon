'use client';
import ResumeBoardProvider from '@/providers/ResumeBoardProvider';

export default function ResumeBoard() {
  return (
    <ResumeBoardProvider>
      <section className="flex h-screen items-center bg-white rounded-lg border shadow">
        <div className="h-full w-1/12 border-r rounded-l-lg shadow bg-white grid grid-rows-6 grid-cols-1">

        </div>
        <div className="relative h-full bg-white w-11/12 rounded-r-lg">
          <div className="border-r-none border-b-none absolute bottom-0 right-0 h-52 w-80 bg-white rounded-br-lg border"></div>
        </div>
      </section>
    </ResumeBoardProvider>
  );
}
