import { Document, Page } from '@react-pdf/renderer';

import ResumeAside from '@/components/resume/03/ResumeAside';
import ResumeBody from '@/components/resume/03/ResumeBody';
import { resumeStyle } from '@/components/resume/03/resumeStyle';

export default function Resume3({ cvs, asideBg }: any) {
  const styles = resumeStyle;
  const bg = asideBg['resume-3'];

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <ResumeAside dCvs={cvs} bg={bg} />
        <ResumeBody dCvs={cvs} />
      </Page>
    </Document>
  );
}
