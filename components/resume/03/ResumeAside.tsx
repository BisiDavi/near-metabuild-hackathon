import { Text, View } from '@react-pdf/renderer';

import Underline from '@/components/resume/common/Underline';
import { asideStyle } from '@/components/resume/03/asideStyle';
import ProgressCircle from '@/components/resume/common/ProgressCircle';
import type { ResumeAside1 } from '@/types/interfaces';
import { useAppSelector } from '@/hooks/useRedux';

export default function ResumeAside({ dCvs }: ResumeAside1) {
  const { asideBg } = useAppSelector((state) => state.resume);
  const styles = asideStyle(asideBg['resume-3']);

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
        {dCvs.skills.map((skill: { [key: string]: string }) => (
          <ProgressCircle key={skill.id} bg="white" text={skill.text} />
        ))}
      </View>
    </View>
  );
}
