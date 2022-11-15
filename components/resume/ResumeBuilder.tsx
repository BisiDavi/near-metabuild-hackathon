'use client';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop, XYCoord } from 'react-dnd';

import { DragItem } from '@/types/interfaces';

export default function ResumeBuilder() {
  const [elements, setElements] = useState({
    SEPARATOR: { top: 10, left: 0, id: 'SEPARATOR' },
    SQUARE: { top: 20, left: 0, id: 'SQUARE' },
    PROGRESSBAR: { top: 30, left: 0, id: 'PROGRESSBAR' },
    TEXT: { top: 40, left: 0, id: 'PROGRESSBAR' },
    PROFILEPICTURE: { top: 50, left: 0, id: 'PROFILEPICTURE' },
  });
  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setElements(
        update(elements, {
          [id]: {
            $merge: { left, top, id },
          },
        }),
      );
    },
    [elements, setElements],
  );

  const [, drop] = useDrop(
    () => ({
      accept: ['SEPARATOR', 'SQUARE', 'PROGRESSBAR', 'TEXT', 'PROFILEPICTURE'],
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox],
  );

  return (
    <section
      ref={drop}
      className="flex h-screen items-center rounded-lg border bg-white shadow"
    >
      <div className="grid h-full w-1/12 grid-cols-1 grid-rows-6 rounded-l-lg border-r bg-white shadow">
        
      </div>
      <div className="relative h-full w-11/12 rounded-r-lg bg-white">
        <div className="border-r-none border-b-none absolute bottom-0 right-0 h-52 w-80 rounded-br-lg border bg-white"></div>
      </div>
    </section>
  );
}
