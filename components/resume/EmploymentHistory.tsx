import { employmentHistoryProps } from '@/types/interfaces';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export default function EmploymentHistory({ details }: employmentHistoryProps) {
  const styles = StyleSheet.create({
    list: {
      display: 'flex',
      listStyle: 'disc',
      fontSize: 12,
      lineHeight: 1.15,
    },
    listGroup: {
      marginTop: 10,
    },
  });
  return (
    <View>
      <Text>{details.role}</Text>
      <Text>
        {details.startedOn} - {details.endOn}
      </Text>
      <View style={styles.listGroup}>
        {details.achievements.map((achievement, index) => (
          <View key={index}>
            <Text style={styles.list}>- {achievement}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
