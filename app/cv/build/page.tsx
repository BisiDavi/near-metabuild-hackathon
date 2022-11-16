// export async function generateStaticParams() {}

import ResumePDFBuilder from '@/components/resume/ResumePDFBuilder';

export default function Page({ params }: { params?: any }) {
  return <ResumePDFBuilder />;
}
