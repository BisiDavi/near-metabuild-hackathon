import { Text, View } from '@react-pdf/renderer';
import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';
import type { profileProps } from '@/types/interfaces';

export default function Profile({ profile }: profileProps) {
  const styles = resumeDocumentStyle;

  return (
    <View style={styles.subsection}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{profile.intro}</Text>
    </View>
  );
}
