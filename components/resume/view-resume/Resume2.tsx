import { Document, Page } from '@react-pdf/renderer';

import ResumeAside from '@/components/resume/02/ResumeAside';
import ResumeBody from '@/components/resume/02/ResumeBody';
import { resumeStyle } from '@/components/resume/common/styles';

export default function Resume2({ cvs, asideBg }: any) {
  const styles = resumeStyle;

  const bg = asideBg['resume-2'];

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <ResumeBody dCvs={cvs} />
        <ResumeAside dCvs={cvs} bg={bg} />
      </Page>
    </Document>
  );
}
