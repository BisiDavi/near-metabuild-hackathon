/* eslint-disable jsx-a11y/alt-text */
import { Text, View, Image } from '@react-pdf/renderer';
import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';

interface profileProps {
  profile: {
    intro: string;
    name: string;
    role: string;
  };
}

export default function Profile({ profile }: profileProps) {
  const styles = resumeDocumentStyle;

  return (
    <View style={styles.subsection}>
      <View>
        <Image
          src="https://res.cloudinary.com/verrb-inc/image/upload/v1668528090/john-doe_bm98ji.jpg"
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.name}>{profile.role}</Text>
        </View>
      </View>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{profile.intro}</Text>
    </View>
  );
}
