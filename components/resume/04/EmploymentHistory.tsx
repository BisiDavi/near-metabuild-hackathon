import { Text, View } from '@react-pdf/renderer';
import { resumeStyle } from '@/components/resume/04/resumeStyle';

import type { employmentHistoryProps } from '@/types/interfaces';
import Underline from '@/components/resume/common/Underline';

export default function EmploymentHistory({ history }: employmentHistoryProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <Underline bg="black" />
      <Text style={styles.heading}>EMPLOYMENT HISTORY</Text>
      {history.map((item) => (
        <View style={styles.view} key={item.role}>
          <View style={styles.left}>
            <Text style={styles.date}>
              {item.startedOn} - {item.endOn}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.h4}>{item.role}</Text>
            <View style={styles.listGroup}>
              {item.achievements.map((achievement, index) => {
                return (
                  <Text key={index} style={styles.list}>
                    {achievement.text}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
