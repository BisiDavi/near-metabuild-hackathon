import { View, StyleSheet } from '@react-pdf/renderer';

interface Props {
  bg: string;
}

export default function ProgressCircle({ bg }: Props) {
  const circles5 = new Array(5);
  const styles = StyleSheet.create({
    circle: {
      borderRadius: '50%',
      backgroundColor: bg,
      marginRight: 5,
    },
  });

  return (
    <View>
      {circles5.map((_, index) => (
        <View key={index} style={styles.circle}></View>
      ))}
    </View>
  );
}
