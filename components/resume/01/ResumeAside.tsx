/* eslint-disable jsx-a11y/alt-text */
import { Image, Text, View } from '@react-pdf/renderer';

import ProgressBar from '@/components/resume/common/ProgressBar';
import type { ResumeAside1 } from '@/types/interfaces';
import { asideStyle } from '@/components/resume/01/asideStyle';

export default function ResumeAside({ dCvs, bg }: ResumeAside1) {
  const styles = asideStyle(bg);

  return (
    <View style={styles.aside}>
      {dCvs.profile.profile && (
        <Image src={dCvs.profile.profile} style={styles.image} />
      )}
      <Text style={styles.name}>{dCvs.profile.name}</Text>
      <Text style={styles.divider}>---</Text>
      <Text style={styles.role}>{dCvs.profile.role}</Text>
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
        {dCvs.skills.map((skill: any) => (
          <ProgressBar key={skill.id} text={skill.text} />
        ))}
      </View>
    </View>
  );
}
