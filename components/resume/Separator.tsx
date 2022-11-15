import { memo } from 'react';
import { useDrag } from 'react-dnd';
interface Props {
  id: string;
  type: string;
  position: {
    left: number;
    top: number;
  };
  style: {
    type: 'dotted' | 'bold';
    color: string;
  };
}

function SeparatorComponent({ style, id, position, type }: Props) {
  const { left, top } = position;
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { id, left, top },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, type],
  );

  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="separator">
      <hr className={type} style={style} />
    </div>
  );
}

const Separator = memo(SeparatorComponent);
export default Separator;
