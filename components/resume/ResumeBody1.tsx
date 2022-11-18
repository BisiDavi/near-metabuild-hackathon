import { Text, View } from '@react-pdf/renderer';

import EmploymentHistory from '@/components/resume/EmploymentHistory';
import Education from '@/components/resume/Education';
import formatDetails from '@/lib/formatDetails';
import { formatReferences } from '@/lib/formatReference';
import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';
import type { ResumeAside1 } from '@/types/interfaces';

export default function ResumeBody1({ dCvs }: ResumeAside1) {
  const styles = resumeDocumentStyle;
  const { profile, employmentHistory, references, education } = dCvs;

  const employmentDetails = formatDetails(employmentHistory);
  const educationDetails = formatDetails(education);
  const referencesDetails = formatReferences(references);
  console.log('referencesDetails,', referencesDetails);

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{profile.intro}</Text>
      <View style={styles.subsection}>
        <Text style={styles.heading}>Employment History</Text>
        {employmentDetails.map((item) => {
          return <EmploymentHistory key={item.role} details={item} />;
        })}
      </View>
      <View style={styles.subsection}>
        <Text style={styles.heading}>Education</Text>
        {educationDetails.map((item) => (
          <Education key={item.course} details={item} />
        ))}
      </View>
      <View style={styles.subsection}>
        <Text style={styles.subheading}>References</Text>
        <Text style={styles.text}>David Leeds from Anglo Hotel</Text>
        <Text style={styles.text}>dleeds@anglo.com | 732-189-0909</Text>
        <Text style={styles.text}>Cole Kenny from AT&T</Text>
        <Text style={styles.text}>kennycole@att.com | 934-289-0209</Text>
      </View>
    </View>
  );
}
