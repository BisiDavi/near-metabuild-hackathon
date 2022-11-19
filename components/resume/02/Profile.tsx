/* eslint-disable jsx-a11y/alt-text */
import { Text, View, Image } from '@react-pdf/renderer';
import { resumeStyle } from '@/components/resume/02/resumeStyle';

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
          src="https://res.cloudinary.com/verrb-inc/image/upload/v1668869250/john-doe-female_eoapgp.jpg"
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{profile.role}</Text>
        </View>
      </View>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{profile.intro}</Text>
    </View>
  );
}
