import { Document, Font, Page, PDFViewer } from '@react-pdf/renderer';
import { memo } from 'react';

import { useAppSelector } from '@/hooks/useRedux';
import useDebounce from '@/hooks/useDebounce';
import ResumeAside from '@/components/resume/02/ResumeAside';
import ResumeBody from '@/components/resume/02/ResumeBody';
import { resumeStyle } from '@/components/resume/common/styles';
import { resumeStateType } from '@/types/redux-types';
import { seeder2 } from '@/lib/seeder-2';

function ResumeDocumentComponent() {
  const styles = resumeStyle;
  const { cvs, selectedResume } = useAppSelector((state) => state.resume);
  const dCvs = useDebounce<resumeStateType['cvs']>(cvs, 2500);
  const resumeContent = selectedResume === 'resume-2' ? dCvs : seeder2;

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
    <PDFViewer showToolbar={false} width="90%" height="100%">
      <Document>
        <Page wrap={true} size="A4" style={styles.page}>
          <ResumeBody dCvs={resumeContent} />
          <ResumeAside dCvs={resumeContent} />
        </Page>
      </Document>
    </PDFViewer>
  );
}

const ResumeDocument = memo(ResumeDocumentComponent);
export default ResumeDocument;
