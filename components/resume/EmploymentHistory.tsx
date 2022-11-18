import { Text, View, StyleSheet } from '@react-pdf/renderer';
import type { employmentHistoryProps } from '@/types/interfaces';

export default function EmploymentHistory({ details }: employmentHistoryProps) {
  const styles = StyleSheet.create({
    view: {
      marginBottom: 6,
    },
    listGroup: {
      marginTop: 5,
    },
    h4: {
      fontWeight: 600,
      fontFamily: 'Lato Bold',
      fontSize: 12,
    },
    date: {
      fontSize: 8,
    },
    text: {
      fontSize: 10,
    },
  });
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
