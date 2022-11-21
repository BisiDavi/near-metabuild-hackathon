import { resumeStateType } from '@/types/redux-types';
import { seeder1 } from '@/lib/seeder-1';
import { seeder2 } from '@/lib/seeder-2';
import { seeder3 } from '@/lib/seeder-3';
import { seeder4 } from '@/lib/seeder-4';

export default function selectSeeder(
  resumeType: resumeStateType['selectedResume'],
) {
  switch (resumeType) {
    case 'resume-1':
      return seeder1;
    case 'resume-2':
      return seeder2;
    case 'resume-3':
      return seeder3;
    case 'resume-4':
      return seeder4;
  }
}
