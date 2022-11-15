import { memo, PropsWithChildren } from 'react';
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

function DragWrapperComponent({
  style,
  id,
  position,
  type,
  children,
}: PropsWithChildren<Props>) {
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
    <div ref={drag} style={{ ...style, opacity }}>
      {children}
    </div>
  );
}

const DragWrapper = memo(DragWrapperComponent);
export default DragWrapper;
