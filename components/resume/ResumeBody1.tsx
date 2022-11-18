import { Text, View } from '@react-pdf/renderer';

import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';
import { ResumeAside1 } from '@/types/interfaces';
import formatEmploymentHistoryDetails from '@/lib/formatEmploymentHistoryDetails';
import EmploymentHistory from './EmploymentHistory';

export default function ResumeBody1({ dCvs }: ResumeAside1) {
  const styles = resumeDocumentStyle;
  const { profile, employmentHistory, references } = dCvs;

  const employmentDetails = formatEmploymentHistoryDetails(employmentHistory);
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{profile.intro}</Text>
      <View style={styles.subsection}>
        <Text style={styles.subheading}>Employment History</Text>
        {employmentDetails.map((item) => {
          return <EmploymentHistory key={item.role} details={item} />;
        })}
        <Text style={styles.h4}>
          Branch Customer Service Representative, AT&T Inc., Seattle
        </Text>
        <Text style={styles.date}>AUGUST 2014 - SEPTEMBER 2020</Text>
        <View style={styles.listGroup}>
          <Text style={styles.text}>
            - Maintained up to date knowledge of products and services.
          </Text>
          <Text style={styles.text}>
            - Handled customer calls and responded to queries about services,
            product malfunctions, promotions and billing.
          </Text>
          <Text style={styles.text}>
            - Worked to address all customer concerns in a timely and effective
            manner.
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
  );
}
