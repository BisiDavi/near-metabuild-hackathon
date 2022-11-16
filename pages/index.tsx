import Layout from '@/layout';
import ResumeEditor from '@/components/resume/ResumeEditor';
import ResumeDocument from '@/components/resume/ResumeDocument';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto my-8 flex h-screen justify-center py-4">
        <div className="w-3/12">
          <ResumeEditor />
        </div>
        <div className="w-9/12">
          <ResumeDocument />
        </div>
      </div>
    </Layout>
  );
}
