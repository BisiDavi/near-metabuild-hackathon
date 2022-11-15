'use client';

import ResumeBoardProvider from '@/providers/ResumeBoardProvider';
import ResumeBuilder from './ResumeBuilder';

export default function ResumeBoard() {
  return (
    <ResumeBoardProvider>
      <ResumeBuilder />
    </ResumeBoardProvider>
  );
}
