import Layout from '@/layout';
import Resume from '@/components/resume/01/Resume';
import Resume2 from '@/components/resume/02/Resume';
import Resume3 from '@/components/resume/03/Resume';
import ResumeSlider from '@/components/slider/ResumeSlider';

export default function Home() {
  return (
    <Layout>
      {/* <Resume /> */}
      {/* <import Resume from '@/components/resume/01/Resume';
 /> */}
      {/* <Resume3 /> */}
      <ResumeSlider />
    </Layout>
  );
}
