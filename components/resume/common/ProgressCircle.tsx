import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface Props {
  bg: string;
  text: string;
}

export default function ProgressCircle({ bg, text }: Props) {
  const circles5 = new Array(5).fill(0);
  const styles = StyleSheet.create({
    circleGroup: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 3,
    },
    circle: {
      borderRadius: '50%',
      backgroundColor: bg,
      marginRight: 8,
      height: 10,
      width: 10,
    },
    text: {
      fontSize: 10,
      margin: 0,
      lineHeight: 1.3,
    },
    progressCircle: {
      marginVertical: 4,
      fontFamily: 'Open Sans',
    },
  });

  return (
    <View style={styles.progressCircle}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.circleGroup}>
        {circles5.map((_, index) => (
          <View style={styles.circle} key={index} />
        ))}
      </View>
    </View>
  );
}
