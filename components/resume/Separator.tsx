import { memo } from 'react';
import { useDrag } from 'react-dnd';
interface Props {
  isDropped: boolean;
  name: string;
  type: string;
  style: {
    type: 'dotted' | 'bold';
    color: string;
  };
}

function SeparatorComponent({ style, name, type, isDropped }: Props) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  );

  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="separator">
      <hr className={type} style={style} />
    </div>
  );
}

const Separator = memo(SeparatorComponent);
export default Separator;
