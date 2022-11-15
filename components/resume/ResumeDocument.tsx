/* eslint-disable jsx-a11y/alt-text */
'use client';
import { PDFViewer } from '@react-pdf/renderer';
import {
  Document,
  Image,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

export default function ResumeDocument() {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#E4E4E4',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    aside: {
      backgroundColor: 'black',
      width: '30%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    image: {
      height: 100,
      width: 100,
      marginTop: 10,
      borderRadius: '50%',
    },
    section: {
      margin: 10,
      padding: 10,
      width: '70%',
      flexGrow: 1,
    },
  });

  return (
    <PDFViewer width="90%" height="100%">
      <Document>
        <Page wrap={true} size="A4" style={styles.page}>
          <View style={styles.aside}>
            <Image
              src="https://res.cloudinary.com/verrb-inc/image/upload/v1668528090/john-doe_bm98ji.jpg"
              style={styles.image}
            />
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
