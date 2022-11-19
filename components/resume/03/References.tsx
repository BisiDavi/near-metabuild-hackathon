import { Text, View } from '@react-pdf/renderer';

import { resumeStyle } from '@/components/resume/03/resumeStyle';
import Underline from '@/components/resume/common/Underline';

interface referenceProps {
  details: { title: string; email: string; phone: string }[];
}

export default function References({ details }: referenceProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <Text style={styles.heading}>References</Text>
      <Underline bg="black" />

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
