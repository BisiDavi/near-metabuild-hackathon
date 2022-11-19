import { Text, View } from '@react-pdf/renderer';

import ProgressBar from '@/components/resume/common/ProgressBar';
import { resumeStyle } from '@/components/resume/03/resumeStyle';
import type { ResumeAside1 } from '@/types/interfaces';
import Underline from '../common/Underline';

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
        <Text style={styles.skill}>Skills</Text>
        {dCvs.skills.map((skill) => (
          <ProgressBar key={skill.id} text={skill.text} />
        ))}
      </View>
    </View>
  );
}
