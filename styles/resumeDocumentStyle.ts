import { StyleSheet } from '@react-pdf/renderer';

export const resumeDocumentStyle = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    lineHeight: 1.2,
  },
  aside: {
    backgroundColor: 'black',
    width: '30%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white',
  },
  image: {
    height: 100,
    width: 100,
    marginVertical: 5,
    borderRadius: '50%',
  },
  date: {
    fontSize: 8,
  },
  section: {
    margin: 10,
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
    fontSize: 12,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 2,
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 13,
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
  listGroup: {
    marginTop: 10,
  },
});
