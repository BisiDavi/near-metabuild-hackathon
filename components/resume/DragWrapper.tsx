import { memo, PropsWithChildren } from 'react';
import { useDrag } from 'react-dnd';
interface Props {
  id: string;
  position: {
    left: number;
    top: number;
  };
}

function DragWrapperComponent({
  id,
  position,
  children,
}: PropsWithChildren<Props>) {
  const { left, top } = position;
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: id,
      item: { id, left, top },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  );

  return (
    <div
      ref={drag}
      className="dragWrapper relative z-40 flex cursor-move items-center border-b px-3"
      style={{ opacity, left, top }}
    >
      {children}
    </div>
  );
}

const DragWrapper = memo(DragWrapperComponent);
export default DragWrapper;
