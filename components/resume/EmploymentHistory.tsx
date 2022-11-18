import { employmentHistoryProps } from '@/types/interfaces';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export default function EmploymentHistory({ details }: employmentHistoryProps) {
  const styles = StyleSheet.create({
    listGroup: {
      marginTop: 10,
    },
    h4: {
      fontWeight: 'bold',
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
    <View>
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
