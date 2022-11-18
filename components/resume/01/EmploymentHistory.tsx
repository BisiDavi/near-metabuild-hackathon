import { Text, View } from '@react-pdf/renderer';
import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';

import type { employmentHistoryProps } from '@/types/interfaces';

export default function EmploymentHistory({ details }: employmentHistoryProps) {
  const styles = resumeDocumentStyle;

  return (
    <View style={styles.view}>
      <Text style={styles.h4}>{details.role}</Text>
      <Text style={styles.date}>
        {details.startedOn} - {details.endOn}
      </Text>
      <View style={styles.listGroup}>
        {details.achievements.map((achievement, index) => {
          return (
            <Text key={index} style={styles.text}>
              {achievement.text}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
