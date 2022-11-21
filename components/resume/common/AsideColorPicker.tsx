import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export default function AsideColorPicker() {
  const [color, setColor] = useState('#aabbcc');
  return <HexColorPicker color={color} onChange={setColor} />;
}
