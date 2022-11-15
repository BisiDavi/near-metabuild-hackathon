'use client';
import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop, XYCoord } from 'react-dnd';

import ResumeBoardProvider from '@/providers/ResumeBoardProvider';
import { DragItem } from '@/types/interfaces';
import ResumeBuilder from './ResumeBuilder';

export default function ResumeBoard() {
  const [elementName, setElementName] = useState('');
  const [elements, setElements] = useState({
    [elementName]: { top: 0, left: 0, id: '' },
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
    <ResumeBoardProvider>
      <ResumeBuilder />
    </ResumeBoardProvider>
  );
}
