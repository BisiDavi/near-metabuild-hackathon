import { Document, Page, PDFViewer } from '@react-pdf/renderer';
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

  console.log('dCvs', dCvs);

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
