import { Text, View } from '@react-pdf/renderer';

import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';
import type { educationProps } from '@/types/interfaces';

export default function Education({ details }: educationProps) {
  const styles = resumeDocumentStyle;
  return (
    <View style={styles.view}>
      <Text style={styles.h4}>{details.course}</Text>
      <Text style={styles.date}>
        {details.startedOn} - {details.endOn}
      </Text>
      {details.achievements.map((achievement) => (
        <Text key={achievement.text} style={styles.text}>
          {achievement.text}
        </Text>
      ))}
    </View>
  );
}