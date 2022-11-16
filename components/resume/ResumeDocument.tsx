/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Image,
  Page,
  Text,
  View,
  PDFViewer,
} from '@react-pdf/renderer';
import { memo } from 'react';

import ProgressBar from '@/components/resume/ProgressBar';
import { useAppSelector } from '@/hooks/useRedux';
import useDebounce from '@/hooks/useDebounce';
import { BuilderStateType } from '@/types/redux-types';
import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';

function ResumeDocumentComponent() {
  const styles = resumeDocumentStyle;
  const { cvs } = useAppSelector((state) => state.builder);
  const dCvs = useDebounce<BuilderStateType['cvs']>(cvs, 2000);

  return (
    <PDFViewer showToolbar={false} width="90%" height="100%">
      <Document>
        <Page wrap={true} size="A4" style={styles.page}>
          <View style={styles.aside}>
            <Image
              src="https://res.cloudinary.com/verrb-inc/image/upload/v1668528090/john-doe_bm98ji.jpg"
              style={styles.image}
            />
            <Text style={styles.name}>{dCvs.profile.name}</Text>
            <Text style={styles.divider}>---</Text>
            <Text style={styles.role}>{dCvs.profile.role}</Text>
            <View style={styles.details}>
              <Text style={styles.heading}>Details</Text>
              <Text style={styles.text}>{dCvs.address.address}</Text>
              <Text style={styles.text}>
                {dCvs.address.state}, {dCvs.address.zip}
              </Text>
              <Text style={styles.text}>{dCvs.address.country}</Text>
              <Text style={styles.text}>{dCvs.address.phone}</Text>
              <Text style={styles.text}>{dCvs.address.email}</Text>
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
            <Text>{dCvs.profile.intro}</Text>
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

const ResumeDocument = memo(ResumeDocumentComponent);
export default ResumeDocument;
