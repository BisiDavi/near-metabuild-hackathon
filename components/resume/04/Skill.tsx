import { View, Text } from '@react-pdf/renderer';

import Underline from '@/components/resume/common/Underline';
import { resumeStyle } from '@/components/resume/04/resumeStyle';

interface Props {
  skills: string[];
}

export default function Skill({ skills }: Props) {
  const styles = resumeStyle;

  return (
    <View>
      <Underline bg="black" />
      <View style={styles.view}>
        <View style={styles.left}>
          <Text style={styles.heading}>SKILLS</Text>
        </View>
        <View style={styles.right}>
          {skills.map((item) => {
            console.log('item', item);
            const splitItem = item.split(',');
            const skill = splitItem[0];
            const skillRating = splitItem[1];
            return (
              <View key={item} style={styles.skills}>
                <Text style={styles.h6}>{skill}</Text>
                <Text style={styles.p}>{skillRating}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
