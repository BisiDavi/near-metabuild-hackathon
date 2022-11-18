import { Text, View } from '@react-pdf/renderer';
import { resumeStyle } from '@/components/resume/01/resumeStyle';
import type { profileProps } from '@/types/interfaces';

export default function Profile({ profile }: profileProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{profile.intro}</Text>
    </View>
  );
}
