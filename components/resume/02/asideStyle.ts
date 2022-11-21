import { StyleSheet } from '@react-pdf/renderer';

export const asideStyle = (bg: string) =>
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
    details: {
      fontSize: 10,
      paddingVertical: 10,
      lineHeight: 1.5,
    },
    subheading: {
      fontWeight: 'bold',
      fontFamily: 'Lato Bold',
      fontSize: 12,
      marginVertical: 2,
    },
  });
