import { View } from '@react-pdf/renderer';

import EmploymentHistory from '@/components/resume/03/EmploymentHistory';
import Education from '@/components/resume/03/Education';
import References from '@/components/resume/03/References';
import Profile from '@/components/resume/03/Profile';
import { formatReferences } from '@/lib/formatReference';
import { resumeStyle } from '@/components/resume/03/resumeStyle';
import formatDetails from '@/lib/formatDetails';
import type { ResumeBody } from '@/types/interfaces';

export default function ResumeBody({ dCvs }: ResumeBody) {
  const styles = resumeStyle;
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
