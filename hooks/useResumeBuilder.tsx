'use client';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop, XYCoord } from 'react-dnd';

import { useAppSelector } from '@/hooks/useRedux';
import { DragItem } from '@/types/interfaces';
import DragWrapper from '@/components/resume/DragWrapper';
import displayElement from '@/lib/displayElement';
import { elementsType } from '@/types';

export default function useResumeBuilder() {
  const {} = useAppSelector((state) => state.builder);

  const [elements, setElements] = useState<elementsType>({
    SEPARATOR: { top: 10, left: 0, id: 'SEPARATOR' },
    SQUARE: { top: 20, left: 0, id: 'SQUARE' },
    PROGRESSBAR: { top: 30, left: 0, id: 'PROGRESSBAR' },
    TEXT: { top: 40, left: 0, id: 'TEXT' },
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

  return { drop, elements };
}
