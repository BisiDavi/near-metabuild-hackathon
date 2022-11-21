import { Text, View } from '@react-pdf/renderer';

import { resumeStyle } from '@/components/resume/common/styles';
import Underline from '@/components/resume/common/Underline';

interface referenceProps {
  details: { title: string; email: string; phone: string }[];
}

export default function References({ details }: referenceProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <Underline bg="black" />
      <Text style={styles.heading}>References</Text>

      {details.map((item) => (
        <View key={item.title} style={styles.view}>
          <Text style={styles.h6}>{item.title}</Text>
          <Text style={styles.p}>
            {item.email} | {item.phone}
          </Text>
        </View>
      ))}
    </View>
  );
}
