import { Text, View } from '@react-pdf/renderer';
import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';

interface Props {
  details: {
    course: string;
    startedOn: string;
    endOn: string;
    achievements: string[];
  };
}

export default function Education({ details }: Props) {
  const styles = resumeDocumentStyle;
  return (
    <View>
      <Text style={styles.text}>{details.course}</Text>
      <Text style={styles.date}>
        {details.startedOn} - {details.endOn}
      </Text>
      {details.achievements.map((achievement: string) => (
        <Text key={achievement} style={styles.text}>
          - {achievement}.
        </Text>
      ))}
    </View>
  );
}
