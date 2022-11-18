import { View } from '@react-pdf/renderer';

import EmploymentHistory from '@/components/resume/01/EmploymentHistory';
import Education from '@/components/resume/01/Education';
import References from '@/components/resume/01/References';
import Profile from '@/components/resume/01/Profile';
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

  return (
    <View style={styles.section}>
      <Profile profile={profile} />
      <EmploymentHistory history={employmentDetails} />
      <Education details={educationDetails} />
      <References details={referencesDetails} />
    </View>
  );
}
