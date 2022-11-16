import ProfilePicture from '@/components/resume/ProfilePicture';
import Separator from '@/components/resume/Separator';
import Square from '@/components/resume/Square';
import Text from '@/components/resume/Text';

export default function displayElement(type: string, props: any) {
  switch (type) {
    case 'Separator': {
      return <Separator style={props.style} />;
    }
    case 'Square': {
      return <Square style={props.style} />;
    }
    case 'Picture': {
      return <ProfilePicture image={props.src} />;
    }
    case 'Text': {
      return <Text text={props.text} style={props.style} />;
    }
    default:
      return null;
  }
}
