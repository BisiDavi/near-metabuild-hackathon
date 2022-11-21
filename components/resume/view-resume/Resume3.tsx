import { Document, Page } from '@react-pdf/renderer';

import { useAppSelector } from '@/hooks/useRedux';
import ResumeAside from '@/components/resume/03/ResumeAside';
import ResumeBody from '@/components/resume/03/ResumeBody';
import { resumeStyle } from '@/components/resume/03/resumeStyle';

export default function Resume3() {
  const styles = resumeStyle;
  const { cvs, asideBg } = useAppSelector(
    (state) => state.resume,
  );
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
