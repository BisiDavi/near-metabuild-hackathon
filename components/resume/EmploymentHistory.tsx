import { useAppSelector } from '@/hooks/useRedux';
import { useAppDispatch } from '@/redux/store';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export default function EmploymentHistory({}) {
  const { cvs } = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

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
      <Text>Customer Service Representation, Anglo Hotel, NYC</Text>
      <Text>AUGUST 2010 - AUGUST 2014</Text>
      <View style={styles.listGroup}>
        <Text style={styles.list}>
          - Provided High quality customer service to customers.
        </Text>
        <Text style={styles.list}>
          - Handled Sales transactions and returns in a timely manner
        </Text>
        <Text style={styles.list}>
          - Greeted customers in a friendly and helpful manner
        </Text>
      </View>
    </View>
  );
}
