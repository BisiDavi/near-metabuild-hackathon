import { Document, Page } from '@react-pdf/renderer';

import { resumeStyle } from '@/components/resume/04/resumeStyle';
import ResumeBody from '@/components/resume/04/ResumeBody';

export default function Resume4({ cvs, asideBg }: any) {
  const styles = resumeStyle;

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <ResumeBody dCvs={cvs} />
      </Page>
    </Document>
  );
}
