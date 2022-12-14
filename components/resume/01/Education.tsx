import { Text, View } from '@react-pdf/renderer';

import { resumeStyle } from '@/components/resume/01/resumeStyle';
import type { educationProps } from '@/types/interfaces';

export default function Education({ details }: educationProps) {
  const styles = resumeStyle;
  return (
    <View style={styles.subsection}>
      <Text style={styles.heading}>Education</Text>
      {details.map((detail) => (
        <View style={styles.view} key={detail.course}>
          <Text style={styles.h4}>{detail.course}</Text>
          <Text style={styles.date}>
            {detail.startedOn} - {detail.endOn}
          </Text>
          {detail.achievements.map((achievement) => (
            <Text key={achievement.text} style={styles.text}>
              {achievement.text}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}
