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
      color: 'white',
    },
    outer: {
      backgroundColor: 'gray',
    },
    inner: {
      backgroundColor: 'white',
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
    divider: {
      width: 30,
    },
    details: {},
    heading: {
      fontWeight: 'bold',
    },
    list: {},
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
            <Text>Tony Sanders</Text>
            <View style={styles.divider}></View>
            <Text>CUSTOMER SERVICE REPRESENTATIVE</Text>
            <View style={styles.details}>
              <Text style={styles.heading}>Details</Text>
              <Text>123460 22nd Ave. SW</Text>
              <Text>Seattle, WA 98116</Text>
              <Text>United States</Text>
              <Text>(206) 742-5187</Text>
              <Text>tonysandy@gmail.com</Text>
              <Text style={styles.heading}>Skills</Text>
              <Text>Excellent Communication Skills</Text>
              <View></View>
              <Text>Troubleshooting Skills</Text>
              <View style={styles.outer}>
                <View style={styles.inner}></View>
              </View>
              <Text>Multitasking Skills</Text>
              <View></View>
              <Text>Marketing Strategies</Text>
              <View></View>
            </View>
          </View>
          <View style={styles.section}>
            <Text>Profile</Text>
            <Text>
              Dedicated Customer Service Representative dedicated to providing
              quality care for ultimate customer satisfaction.Proven ability to
              establish and maintain excellent communication and relationships
              with clients. Adept in general accounting and finance
              transactions.
            </Text>
            <Text>Employment History</Text>
            <Text>
              Branch Customer Service Representative, AT&T Inc., Seattle
            </Text>
            <Text>AUGUST 2014 - SEPTEMBER 2020</Text>
            <View style={styles.list}>
              <Text></Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
