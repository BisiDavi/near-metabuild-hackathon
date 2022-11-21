import { Text, View } from '@react-pdf/renderer';

import ProgressBar from '@/components/resume/common/ProgressBar';
import { asideStyle } from '@/components/resume/02/asideStyle';
import type { ResumeAside1 } from '@/types/interfaces';
import { useAppSelector } from '@/hooks/useRedux';

export default function ResumeAside({ dCvs }: ResumeAside1) {
  const { asideBg } = useAppSelector((state) => state.resume);
  const styles = asideStyle(asideBg["resume-2"]);

  return (
    <View style={styles.aside}>
      <View style={styles.details}>
        <Text style={styles.subheading}>Details</Text>
        <Text>{dCvs.address.address}</Text>
        <Text>
          {dCvs.address.city}, {dCvs.address.state}, {dCvs.address.zip}
        </Text>
        <Text>{dCvs.address.country}</Text>
        <Text>{dCvs.address.phone}</Text>
        <Text>{dCvs.address.email}</Text>
        <Text style={styles.subheading}>Skills</Text>
        {dCvs.skills.map((skill: { id: string; text: string }) => (
          <ProgressBar key={skill.id} text={skill.text} />
        ))}
      </View>
    </View>
  );
}
