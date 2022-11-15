// export async function generateStaticParams() {}

import ResumeBoard from "@/components/resume/ResumeBoard";

export default function Page({ params }: { params?: any }) {
  return <ResumeBoard />;
}
