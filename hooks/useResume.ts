import { getResumes, getResume } from '@/lib/marketplace';

export default function useResume() {
  async function fetchResumes() {
    return await getResumes();
  }

  async function fetchResume(id: string) {
    return await getResume(id);
  }

  return { fetchResumes, fetchResume };
}
