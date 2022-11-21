import { Font, PDFViewer } from '@react-pdf/renderer';
// import displayResumeDocument from '@/lib/displayResumeDocument';
import { useAppSelector } from '@/hooks/useRedux';
import { PropsWithChildren } from 'react';

export default function ViewPdf({ children }: PropsWithChildren) {
  const { selectedResume }: any = useAppSelector((state) => state.resume);

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
      {children}
    </PDFViewer>
  );
}
