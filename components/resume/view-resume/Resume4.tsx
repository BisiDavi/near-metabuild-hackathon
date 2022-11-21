import { Document, Page } from '@react-pdf/renderer';

import { useAppSelector } from '@/hooks/useRedux';
import { resumeStyle } from '@/components/resume/04/resumeStyle';
import { seeder4 } from '@/lib/seeder-4';
import ResumeBody from '@/components/resume/04/ResumeBody';

export default function Resume1() {
  const styles = resumeStyle;
  const { cvs, selectedResume } = useAppSelector((state) => state.resume);
  const resumeContent = selectedResume === 'resume-4' ? cvs : seeder4;

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <ResumeBody dCvs={resumeContent} />
      </Page>
    </Document>
  );
}
