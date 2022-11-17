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
      marginTop: 0,
      borderRadius: '10px',
      height: 6,
    },
    inner: {
      backgroundColor: 'white',
      height: 6,
      borderRadius: '10px',
      width: percentage,
    },
    text: {
      fontSize: 10,
      margin: 0,
      lineHeight: 1.3,
    },
    progressBar: {
      marginBottom: 12,
    },
  });

  return (
    <View style={styles.progressBar}>
      <Text style={styles.text}>{textValue}</Text>
      <View style={styles.outer}>
        <View style={styles.inner}></View>
      </View>
    </View>
  );
}
