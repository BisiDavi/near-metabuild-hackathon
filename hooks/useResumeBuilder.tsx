'use client';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop, XYCoord } from 'react-dnd';

import { useAppSelector } from '@/hooks/useRedux';
import { DragItem } from '@/types/interfaces';
import { elementsType } from '@/types';

export default function useResumeBuilder() {
  const {} = useAppSelector((state) => state.builder);

  const [elements, setElements] = useState<elementsType>({
    Separator: { top: 10, left: 0, id: 'Separator' },
    Square: { top: 20, left: 0, id: 'Square' },
    Progressbar: { top: 30, left: 0, id: 'Progressbar' },
    Text: { top: 40, left: 0, id: 'Text' },
    Picture: { top: 50, left: 0, id: 'Picture' },
  });

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setElements(
        update(elements, {
          [id]: {
            $merge: { left, top },
          },
        }),
      );
    },
    [elements, setElements],
  );

  const [, drop] = useDrop(
    () => ({
      accept: ['Separator', 'Square', 'Progressbar', 'Text', 'Picture'],
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
