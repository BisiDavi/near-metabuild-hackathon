/* eslint-disable jsx-a11y/alt-text */
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';

import ProgressBar from '@/components/resume/common/ProgressBar';
import type { ResumeAside1 } from '@/types/interfaces';
import { useAppSelector } from '@/hooks/useRedux';

export default function ResumeAside({ dCvs }: ResumeAside1) {
  const { asideBg } = useAppSelector((state) => state.resume);
  const styles = StyleSheet.create({
    aside: {
      backgroundColor: asideBg['resume-1'],
      width: '30%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: 'white',
      paddingTop: 60,
    },
    image: {
      height: 100,
      width: 100,
      marginVertical: 5,
      borderRadius: '50%',
    },
    divider: {
      width: 30,
      color: 'white',
    },
    details: {
      fontSize: 10,
      paddingVertical: 10,
      lineHeight: 1.5,
    },
    text: {
      fontSize: 10,
    },
    subheading: {
      fontWeight: 'bold',
      fontFamily: 'Lato Bold',
      fontSize: 11,
      marginVertical: 2,
    },
    role: {
      fontSize: 8,
      marginTop: 2,
    },
    name: {
      fontSize: 14,
      marginTop: 2,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.aside}>
      <Image
        src="https://res.cloudinary.com/verrb-inc/image/upload/v1668528090/john-doe_bm98ji.jpg"
        style={styles.image}
      />
      <Text style={styles.name}>{dCvs.profile.name}</Text>
      <Text style={styles.divider}>---</Text>
      <Text style={styles.role}>{dCvs.profile.role}</Text>
      <View style={styles.details}>
        <Text style={styles.subheading}>Details</Text>
        <Text>{dCvs.address.address}</Text>
        <Text>
          {dCvs.address.city}, {dCvs.address.state}, {dCvs.address.zip}
        </Text>
        <Text>{dCvs.address.country}</Text>
        <Text>{dCvs.address.phone}</Text>
        <Text>{dCvs.address.email}</Text>
        <Text style={styles.subheading}>Skills</Text>
        {dCvs.skills.map((skill: any) => (
          <ProgressBar key={skill.id} text={skill.text} />
        ))}
      </View>
    </View>
  );
}
