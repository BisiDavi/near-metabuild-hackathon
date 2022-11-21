import { Document, Page } from '@react-pdf/renderer';

import { useAppSelector } from '@/hooks/useRedux';
import ResumeAside from '@/components/resume/01/ResumeAside';
import ResumeBody from '@/components/resume/01/ResumeBody';
import { resumeStyle } from '@/components/resume/01/resumeStyle';
import { seeder1 } from '@/lib/seeder-1';

export default function Resume1() {
  const { cvs, selectedResume, asideBg } = useAppSelector(
    (state) => state.resume,
  );
  const styles = resumeStyle;
  const resumeContent = selectedResume === 'resume-1' ? cvs : seeder1;
  const bg = asideBg['resume-1'];

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <ResumeAside dCvs={resumeContent} bg={bg} />
        <ResumeBody dCvs={resumeContent} />
      </Page>
    </Document>
  );
}
