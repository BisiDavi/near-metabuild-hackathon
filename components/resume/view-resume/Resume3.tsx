import { Document, Page } from '@react-pdf/renderer';

import { useAppSelector } from '@/hooks/useRedux';
import useDebounce from '@/hooks/useDebounce';
import ResumeAside from '@/components/resume/03/ResumeAside';
import ResumeBody from '@/components/resume/03/ResumeBody';
import { resumeStyle } from '@/components/resume/03/resumeStyle';
import { seeder3 } from '@/lib/seeder-3';
import { resumeStateType } from '@/types/redux-types';

export default function Resume3() {
  const styles = resumeStyle;
  const { cvs, selectedResume, asideBg } = useAppSelector(
    (state) => state.resume,
  );
  const bg = asideBg['resume-3'];
  const resumeContent = selectedResume === 'resume-3' ? cvs : seeder3;

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <ResumeAside dCvs={resumeContent} bg={bg} />
        <ResumeBody dCvs={resumeContent} />
      </Page>
    </Document>
  );
}
