import { Text, View } from '@react-pdf/renderer';

import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';

interface referenceProps {
  details: { title: string; email: string; phone: string }[];
}

export default function References({ details }: referenceProps) {
  const styles = resumeDocumentStyle;

  return (
    <View style={styles.subsection}>
      <Text style={styles.heading}>References</Text>
      {details.map((item) => (
        <View key={item.title} style={styles.view}>
          <Text style={styles.h4}>{item.title}</Text>
          <Text style={styles.text}>
            {item.email} | {item.phone}
          </Text>
        </View>
      ))}
    </View>
  );
}
