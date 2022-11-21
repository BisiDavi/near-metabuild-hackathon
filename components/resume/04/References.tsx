import { Text, View } from '@react-pdf/renderer';

import { resumeStyle } from '@/components/resume/04/resumeStyle';
import Underline from '@/components/resume/common/Underline';

interface referenceProps {
  details: { title: string; email: string; phone: string }[];
}

export default function References({ details }: referenceProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <Underline bg="black" />
      <View style={styles.view}>
        <View style={styles.left}>
          <Text style={styles.heading}>REFERENCES</Text>
        </View>
        <View style={styles.right}>
          {details.map((item) => (
            <View key={item.title}>
              <Text style={styles.h6}>{item.title}</Text>
              <Text style={styles.p}>
                {item.email} | {item.phone}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
