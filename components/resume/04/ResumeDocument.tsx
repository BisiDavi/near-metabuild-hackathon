import { Document, Font, Page, PDFViewer } from '@react-pdf/renderer';
import { memo } from 'react';

import { useAppSelector } from '@/hooks/useRedux';
import useDebounce from '@/hooks/useDebounce';
import ResumeBody from '@/components/resume/04/ResumeBody';
import { resumeStyle } from '@/components/resume/04/resumeStyle';
import { seeder4 } from '@/lib/seeder-4';
import { resumeStateType } from '@/types/redux-types';

function ResumeDocumentComponent() {
  const styles = resumeStyle;
  const { cvs, selectedResume, asideBg } = useAppSelector(
    (state) => state.resume,
  );
  const bg = asideBg['resume-3'];
  const dCvs = useDebounce<resumeStateType['cvs']>(cvs, 2500);
  const resumeContent = selectedResume === 'resume-3' ? dCvs : seeder4;

  Font.register({
    family: 'Open Sans',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
  });

  Font.register({
    family: 'Lato',
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
  });

  Font.register({
    family: 'Lato Italic',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
  });

  Font.register({
    family: 'Lato Bold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
  });

  return (
    <PDFViewer showToolbar={false} width="100%" height="100%">
      <Document>
        <Page wrap={true} size="A4" style={styles.page}>
          <ResumeBody dCvs={resumeContent} />
        </Page>
      </Document>
    </PDFViewer>
  );
}

const ResumeDocument = memo(ResumeDocumentComponent);
export default ResumeDocument;
