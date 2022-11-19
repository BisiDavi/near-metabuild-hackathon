import { Text, View } from '@react-pdf/renderer';

import Underline from '@/components/resume/common/Underline';
import { resumeStyle } from '@/components/resume/03/resumeStyle';
import type { educationProps } from '@/types/interfaces';

export default function Education({ details }: educationProps) {
  const styles = resumeStyle;
  return (
    <View style={styles.subsection}>
      <Text style={styles.heading}>Education</Text>
      <Underline bg="black" />

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
