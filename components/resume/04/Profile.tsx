/* eslint-disable jsx-a11y/alt-text */
import { Text, View } from '@react-pdf/renderer';

import Underline from '@/components/resume/common/Underline';
import { resumeStyle } from '@/components/resume/03/resumeStyle';

interface profileProps {
  profile: {
    intro: string;
    name: string;
    role: string;
  };
}

export default function Profile({ profile }: profileProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <View style={styles.profile}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
      </View>
      <Text style={styles.heading}>Profile</Text>
      <Underline bg="black" />
      <Text style={styles.text}>{profile.intro}</Text>
    </View>
  );
}
