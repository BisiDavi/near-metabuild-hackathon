/* eslint-disable jsx-a11y/alt-text */
import { Text, View } from '@react-pdf/renderer';

import Underline from '@/components/resume/common/Underline';
import { resumeStyle } from '@/components/resume/04/resumeStyle';

interface profileProps {
  profile: {
    intro: string;
    name: string;
    role: string;
  };
  address: any;
}

export default function Profile({ profile, address }: profileProps) {
  const styles = resumeStyle;

  return (
    <View style={styles.subsection}>
      <View style={styles.profile}>
        <Text style={styles.name}>
          {profile.name}, {profile.role}
        </Text>
        <Text style={styles.address}>
          {address.address}, {address.city}, {address.state}, {address.country}{' '}
          , {address.phone}, {address.email}
        </Text>
      </View>
      <Underline bg="black" />
      <View style={styles.view}>
        <View style={styles.left}>
          <Text style={styles.heading}>PROFILE</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.text}>{profile.intro}</Text>
        </View>
      </View>
    </View>
  );
}
