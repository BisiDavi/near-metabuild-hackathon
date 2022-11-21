import { StyleSheet } from '@react-pdf/renderer';

export const asideStyles = (bg: string) =>
  StyleSheet.create({
    aside: {
      backgroundColor: bg,
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
