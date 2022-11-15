import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export default function ResumeDocument() {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#E4E4E4',
      width: '100%',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <PDFViewer width="90%" height="100%">
      <Document>
        <Page wrap={true} size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
