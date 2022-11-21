import { Document, Page } from '@react-pdf/renderer';

import { useAppSelector } from '@/hooks/useRedux';
import ResumeAside from '@/components/resume/02/ResumeAside';
import ResumeBody from '@/components/resume/02/ResumeBody';
import { resumeStyle } from '@/components/resume/common/styles';
import { seeder2 } from '@/lib/seeder-2';

export default function Resume2() {
  const styles = resumeStyle;
  const { cvs, selectedResume, asideBg } = useAppSelector(
    (state) => state.resume,
  );
  const bg = asideBg['resume-2'];
  const resumeContent = selectedResume === 'resume-2' ? cvs : seeder2;

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <ResumeBody dCvs={resumeContent} />
        <ResumeAside dCvs={resumeContent} bg={bg} />
      </Page>
    </Document>
  );
}
