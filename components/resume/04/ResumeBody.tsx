import { View } from '@react-pdf/renderer';

import EmploymentHistory from '@/components/resume/04/EmploymentHistory';
import Education from '@/components/resume/04/Education';
import References from '@/components/resume/04/References';
import Profile from '@/components/resume/04/Profile';
import { formatReferences } from '@/lib/formatReference';
import { resumeStyle } from '@/components/resume/04/resumeStyle';
import formatDetails from '@/lib/formatDetails';
import type { ResumeBody } from '@/types/interfaces';

export default function ResumeBody({ dCvs }: ResumeBody) {
  const styles = resumeStyle;
  const { profile, employmentHistory, address, references, education } = dCvs;

  const employmentDetails = formatDetails(employmentHistory);
  const educationDetails = formatDetails(education);
  const referencesDetails = formatReferences(references);

  return (
    <View style={styles.section}>
      <Profile profile={profile} address={address} />
      <EmploymentHistory history={employmentDetails} />
      <Education details={educationDetails} />
      <References details={referencesDetails} />
    </View>
  );
}
