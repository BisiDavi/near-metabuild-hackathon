import { Document, Page } from '@react-pdf/renderer';

import ResumeAside from '@/components/resume/01/ResumeAside';
import ResumeBody from '@/components/resume/01/ResumeBody';
import { resumeStyle } from '@/components/resume/01/resumeStyle';

export default function Resume1({ cvs, asideBg }: any) {
  const styles = resumeStyle;
  const bg = asideBg['resume-1'];

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <ResumeAside dCvs={cvs} bg={bg} />
        <ResumeBody dCvs={cvs} />
      </Page>
    </Document>
  );
}
