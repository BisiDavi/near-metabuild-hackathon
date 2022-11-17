import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface Props {
  text: string;
}

export default function ProgressBar({ text }: Props) {
  const splitText = text.split(',');
  const textValue = splitText[0];
  const percentage = splitText[1] ? splitText[1].trim() : '100%';

  const styles = StyleSheet.create({
    outer: {
      backgroundColor: 'gray',
      marginVertical: 4,
      borderRadius: '10px',
      height: 6,
    },
    inner: {
      backgroundColor: 'white',
      height: 6,
      borderRadius: '10px',
      width: percentage,
    },
  });

  return (
    <>
      <Text>{textValue}</Text>
      <View style={styles.outer}>
        <View style={styles.inner}></View>
      </View>
    </>
  );
}
