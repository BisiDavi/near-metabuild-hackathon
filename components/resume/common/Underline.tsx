import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface Props {
  bg: string;
}

export default function Underline({ bg }: Props) {
  const styles = StyleSheet.create({
    underline: {
      height: 2,
      width: '100%',
      backgroundColor: bg,
      marginBottom: 10,
      marginTop: -5,
    },
  });

  return (
    <View>
      <View style={styles.underline}></View>
    </View>
  );
}
