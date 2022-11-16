import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface Props {
  percentage: string;
  text: string;
}

export default function ProgressBar({ percentage, text }: Props) {
  const styles = StyleSheet.create({
    outer: {
      backgroundColor: 'gray',
      marginVertical: 4,
      height: 6,
    },
    inner: {
      backgroundColor: 'white',
      height: 6,
      width: percentage,
    },
  });
  return (
    <>
      <Text>{text}</Text>
      <View style={styles.outer}>
        <View style={styles.inner}></View>
      </View>
    </>
  );
}
