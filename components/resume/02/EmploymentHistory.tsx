import { Text, View } from '@react-pdf/renderer';
import { resumeStyle } from '@/components/resume/common/styles';

import type { employmentHistoryProps } from '@/types/interfaces';

export default function EmploymentHistory({ history }: employmentHistoryProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <Text style={styles.heading}>Employment History</Text>
      {history.map((item) => (
        <View style={styles.view} key={item.role}>
          <Text style={styles.h4}>{item.role}</Text>
          <Text style={styles.date}>
            {item.startedOn} - {item.endOn}
          </Text>
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
      ))}
    </View>
  );
}
