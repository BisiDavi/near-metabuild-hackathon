import { Document, Font, Page, PDFViewer } from '@react-pdf/renderer';
import { memo } from 'react';

import { useAppSelector } from '@/hooks/useRedux';
import useDebounce from '@/hooks/useDebounce';
import { BuilderStateType } from '@/types/redux-types';
import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';
import ResumeAside1 from '@/components/resume/ResumeAside1';
import ResumeBody1 from '@/components/resume/ResumeBody1';

function ResumeDocumentComponent() {
  const styles = resumeDocumentStyle;
  const { cvs } = useAppSelector((state) => state.builder);
  const dCvs = useDebounce<BuilderStateType['cvs']>(cvs, 2500);

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
          <ResumeAside1 dCvs={dCvs} />
          <ResumeBody1 dCvs={dCvs} />
        </Page>
      </Document>
    </PDFViewer>
  );
}

const ResumeDocument = memo(ResumeDocumentComponent);
export default ResumeDocument;
