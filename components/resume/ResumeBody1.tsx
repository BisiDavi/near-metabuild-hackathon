import { Text, View } from '@react-pdf/renderer';

import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';
import { ResumeAside1 } from '@/types/interfaces';
import formatEmploymentHistoryDetails from '@/lib/formatEmploymentHistoryDetails';
import EmploymentHistory from './EmploymentHistory';

export default function ResumeBody1({ dCvs }: ResumeAside1) {
  console.log('dCvs', dCvs);
  const styles = resumeDocumentStyle;
  const { profile, employmentHistory, references, education } = dCvs;

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
