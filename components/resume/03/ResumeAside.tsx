import { Text, View } from '@react-pdf/renderer';

import ProgressBar from '@/components/resume/common/ProgressBar';
import Underline from '@/components/resume/common/Underline';
import { resumeStyle } from '@/components/resume/03/resumeStyle';
import type { ResumeAside1 } from '@/types/interfaces';

export default function ResumeAside({ dCvs }: ResumeAside1) {
  const styles = resumeStyle;

  return (
    <View style={styles.aside}>
      <View style={styles.details}>
        <Text style={styles.subheading}>Details</Text>
        <Underline bg="white" />
        <Text>{dCvs.address.address}</Text>
        <Text>
          {dCvs.address.city}, {dCvs.address.state}, {dCvs.address.zip}
        </Text>
        <Text>{dCvs.address.country}</Text>
        <Text>{dCvs.address.phone}</Text>
        <Text>{dCvs.address.email}</Text>
      </View>
      <View style={styles.skills}>
        <Text style={styles.subheading}>Skills</Text>
        <Underline bg="white" />
        {dCvs.skills.map((skill) => (
          <ProgressBar key={skill.id} text={skill.text} />
        ))}
      </View>
    </View>
  );
}
