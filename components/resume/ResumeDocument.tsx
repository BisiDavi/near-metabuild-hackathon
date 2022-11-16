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
import ProgressBar from '@/components/resume/ProgressBar';

export default function ResumeDocument() {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#E4E4E4',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    aside: {
      backgroundColor: 'black',
      width: '30%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: 'white',
    },
    image: {
      height: 100,
      width: 100,
      marginVertical: 5,
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
      color: 'white',
    },
    details: {
      padding: 20,
      fontSize: 12,
    },
    text: {
      marginVertical: 2,
    },
    heading: {
      fontWeight: 'bold',
      fontSize: 14,
      marginVertical: 5,
    },
    list: {
      display: 'flex',
      listStyle: 'disc',
      fontSize: 12,
      lineHeight: 1.15,
    },
    role: {
      fontSize: 8,
      marginTop: 2,
    },
    name: {
      fontSize: 14,
      marginTop: 2,
      fontWeight: 'bold',
    },
    listGroup: {
      marginTop: 10,
    },
  });

  return (
    <PDFViewer showToolbar={false} width="90%" height="100%">
      <Document>
        <Page wrap={true} size="A4" style={styles.page}>
          <View style={styles.aside}>
            <Image
              src="https://res.cloudinary.com/verrb-inc/image/upload/v1668528090/john-doe_bm98ji.jpg"
              style={styles.image}
            />
            <Text style={styles.name}>Tony Sanders</Text>
            <Text style={styles.divider}>---</Text>
            <Text style={styles.role}>CUSTOMER SERVICE REPRESENTATIVE</Text>
            <View style={styles.details}>
              <Text style={styles.heading}>Details</Text>
              <Text style={styles.text}>123460 22nd Ave. SW</Text>
              <Text style={styles.text}>Seattle, WA 98116</Text>
              <Text style={styles.text}>United States</Text>
              <Text style={styles.text}>(206) 742-5187</Text>
              <Text style={styles.text}>tonysandy@gmail.com</Text>
              <Text style={styles.heading}>Skills</Text>
              <ProgressBar
                text="Excellent Communication Skills"
                percentage="80%"
              />
              <ProgressBar text="Troubleshooting Skills" percentage="90%" />
              <ProgressBar text="Multitasking Skills" percentage="100%" />
              <ProgressBar text="Marketing Strategies" percentage="98%" />
              <ProgressBar
                text="Mediation & Negotiation Skills"
                percentage="40%"
              />
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
            <View>
              <Text>
                Branch Customer Service Representative, AT&T Inc., Seattle
              </Text>
              <Text>AUGUST 2014 - SEPTEMBER 2020</Text>
              <View style={styles.listGroup}>
                <Text style={styles.list}>
                  - Maintained up to date knowledge of products and services.
                </Text>
                <Text style={styles.list}>
                  - Handled customer calls and responded to queries about
                  services, product malfunctions, promotions and billing.
                </Text>
                <Text style={styles.list}>
                  - Worked to address all customer concerns in a timely and
                  effective manner.
                </Text>
              </View>
            </View>
            <View>
              <Text>Customer Service Representation, Anglo Hotel, NYC</Text>
              <Text>AUGUST 2010 - AUGUST 2014</Text>
              <View style={styles.listGroup}>
                <Text style={styles.list}>
                  - Provided High quality customer service to customers.
                </Text>
                <Text style={styles.list}>
                  - Handled Sales transactions and returns in a timely manner
                </Text>
                <Text style={styles.list}>
                  - Greeted customers in a friendly and helpful manner
                </Text>
              </View>
            </View>
            <View>
              <Text>Education</Text>
              <Text>
                Bachelor of Communications, University of Seattle, Seattle
              </Text>
              <Text>AUGUST 2007 - May 2011</Text>
              <Text>- Graduated with High Honours.</Text>
              <Text>High School Diploma, Hartwick High School, Hartwick</Text>
              <Text>AUGUST 2007 - May 2011</Text>
            </View>
            <View>
              <Text>References</Text>
              <Text>David Leeds from Anglo Hotel</Text>
              <Text>dleeds@anglo.com | 732-189-0909</Text>
              <Text>Cole Kenny from AT&T</Text>
              <Text>kennycole@att.com | 934-289-0209</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
