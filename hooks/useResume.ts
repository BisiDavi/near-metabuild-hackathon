import { getResumes } from '@/lib/marketplace';

export default function useResume() {
  async function fetchResumes() {
    return await getResumes();
  }

  return { fetchResumes };
}
