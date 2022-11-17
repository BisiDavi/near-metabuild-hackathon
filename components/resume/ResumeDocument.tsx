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
  const dCvs = useDebounce<BuilderStateType['cvs']>(cvs, 2500);

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
              <Text style={styles.subheading}>Details</Text>
              <Text>{dCvs.address.address}</Text>
              <Text>
                {dCvs.address.city}, {dCvs.address.state}, {dCvs.address.zip}
              </Text>
              <Text>{dCvs.address.country}</Text>
              <Text>{dCvs.address.phone}</Text>
              <Text>{dCvs.address.email}</Text>
              <Text style={styles.skill}>Skills</Text>
              {dCvs.skills.map((skill) => (
                <ProgressBar key={skill.id} text={skill.text} />
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Profile</Text>
            <Text style={styles.text}>{dCvs.profile.intro}</Text>
            <View style={styles.subsection}>
              <Text style={styles.subheading}>Employment History</Text>
              <Text style={styles.h4}>
                Branch Customer Service Representative, AT&T Inc., Seattle
              </Text>
              <Text style={styles.date}>AUGUST 2014 - SEPTEMBER 2020</Text>
              <View style={styles.listGroup}>
                <Text style={styles.text}>
                  - Maintained up to date knowledge of products and services.
                </Text>
                <Text style={styles.text}>
                  - Handled customer calls and responded to queries about
                  services, product malfunctions, promotions and billing.
                </Text>
                <Text style={styles.text}>
                  - Worked to address all customer concerns in a timely and
                  effective manner.
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.subheading}>
                Customer Service Representation, Anglo Hotel, NYC
              </Text>
              <Text style={styles.date}>AUGUST 2010 - AUGUST 2014</Text>
              <View style={styles.listGroup}>
                <Text style={styles.text}>
                  - Provided High quality customer service to customers.
                </Text>
                <Text style={styles.text}>
                  - Handled Sales transactions and returns in a timely manner
                </Text>
                <Text style={styles.text}>
                  - Greeted customers in a friendly and helpful manner
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.subheading}>Education</Text>
              <Text style={styles.text}>
                Bachelor of Communications, University of Seattle, Seattle
              </Text>
              <Text style={styles.date}>AUGUST 2007 - May 2011</Text>
              <Text style={styles.text}>- Graduated with High Honours.</Text>
              <Text style={styles.text}>
                - High School Diploma, Hartwick High School, Hartwick
              </Text>
              <Text style={styles.date}>AUGUST 2007 - May 2011</Text>
            </View>
            <View>
              <Text style={styles.subheading}>References</Text>
              <Text style={styles.text}>David Leeds from Anglo Hotel</Text>
              <Text style={styles.text}>dleeds@anglo.com | 732-189-0909</Text>
              <Text style={styles.text}>Cole Kenny from AT&T</Text>
              <Text style={styles.text}>kennycole@att.com | 934-289-0209</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

const ResumeDocument = memo(ResumeDocumentComponent);
export default ResumeDocument;
