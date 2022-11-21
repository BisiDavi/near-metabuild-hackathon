import { Text, View } from '@react-pdf/renderer';

import Underline from '@/components/resume/common/Underline';
import { resumeStyle } from '@/components/resume/04/resumeStyle';
import type { educationProps } from '@/types/interfaces';

export default function Education({ details }: educationProps) {
  const styles = resumeStyle;
  return (
    <View style={styles.subsection}>
      <Underline bg="black" />
      <Text style={styles.heading}>Education</Text>
      {details.map((detail) => (
        <View style={styles.view} key={detail.course}>
          <View style={styles.left}>
            <Text style={styles.date}>
              {detail.startedOn} - {detail.endOn}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.h4}>{detail.course}</Text>
            {detail.achievements.map((achievement) => (
              <Text key={achievement.text} style={styles.list}>
                {achievement.text}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
