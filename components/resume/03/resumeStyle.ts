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
  underline:{
    
  },
  bio: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  aside: {
    backgroundColor: 'black',
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
    marginRight: 10,
  },
  date: {
    fontSize: 8,
    marginBottom: 2,
    color: 'gray',
  },
  section: {
    margin: 10,
    marginTop: 40,
    padding: 10,
    width: '70%',
    flexGrow: 1,
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
  subsection: {
    marginBottom: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontFamily: 'Lato Bold',
    fontSize: 16,
    marginVertical: 2,
    lineHeight: 1,
  },
  view: {
    marginBottom: 4,
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
  skill: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 8,
    marginTop: -2,
    fontFamily: 'Lato Bold',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },
  listGroup: {
    marginTop: 2,
  },
});
