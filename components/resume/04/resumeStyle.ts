import { StyleSheet } from '@react-pdf/renderer';

export const resumeStyle = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Open Sans',
    lineHeight: 1.4,
  },
  profile: {
    textAlign: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 12,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: 20,
  },
  date: {
    fontSize: 8,
    marginBottom: 2,
    color: 'black',
  },
  section: {
    margin: 10,
    marginTop: 15,
    padding: 10,
    width: '100%',
    flexGrow: 1,
  },
  divider: {
    width: 30,
    color: 'white',
  },
  details: {
    fontSize: 10,
    lineHeight: 1.5,
    width: '100%',
  },
  text: {
    fontSize: 10,
  },
  subsection: {
    marginBottom: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontFamily: 'Lato Bold',
    fontSize: 12,
    marginVertical: 2,
    lineHeight: 1.4,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  left: {
    width: '30%',
  },
  right: {
    width: '65%',
  },
  h4: {
    fontWeight: 'bold',
    fontFamily: 'Lato Bold',
    fontSize: 12,
  },
  h6: {
    fontWeight: 'bold',
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  p: {
    fontSize: 10,
  },
  subheading: {
    fontWeight: 'bold',
    fontFamily: 'Lato Bold',
    fontSize: 12,
    marginVertical: 2,
  },
  skills: {
    marginTop: 20,
    fontWeight: 'bold',
    width: '100%',
  },
  address: {
    fontSize: 10,
    marginTop: 0,
    fontFamily: 'Lato Bold',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Lato Bold',
    fontWeight: 'bold',
  },
  listGroup: {
    marginTop: 2,
  },
  list: {
    fontSize: 10,
    marginLeft: 5,
  },
});
