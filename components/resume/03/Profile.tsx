/* eslint-disable jsx-a11y/alt-text */
import { Text, View, Image } from '@react-pdf/renderer';
import { resumeStyle } from '@/components/resume/03/resumeStyle';
import Underline from '@/components/resume/common/Underline';

interface profileProps {
  profile: {
    intro: string;
    name: string;
    role: string;
  };
}

export default function Profile({ profile }: profileProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <View style={styles.bio}>
        <Image
          src="https://res.cloudinary.com/verrb-inc/image/upload/v1668528090/john-doe_bm98ji.jpg"
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{profile.role}</Text>
        </View>
      </View>
      <Text style={styles.heading}>Profile</Text>
      <Underline bg="black" />
      <Text style={styles.text}>{profile.intro}</Text>
    </View>
  );
}
