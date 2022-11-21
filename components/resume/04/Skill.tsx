import { View, Text } from '@react-pdf/renderer';

import Underline from '@/components/resume/common/Underline';
import { resumeStyle } from '@/components/resume/04/resumeStyle';

interface Props {
  skills: { [key: string]: string }[];
}

export default function Skill({ skills }: Props) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <Underline bg="black" />
      <View style={styles.view}>
        <View style={styles.left}>
          <Text style={styles.heading}>SKILLS</Text>
        </View>
        <View style={styles.right}>
          {skills.map((item) => {
            console.log('item', item);
            const splitItem = item.text.split(',');
            const skill = splitItem[0];
            const skillRating = splitItem[1];
            return (
              <View key={item.text} style={styles.skills}>
                <View key={item.text} style={styles.skillSet}>
                  <Text>{skill}</Text>
                  <Text>{skillRating}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
