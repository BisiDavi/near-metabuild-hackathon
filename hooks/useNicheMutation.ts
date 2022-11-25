import useRequestMutation from '@/hooks/useRequestMutation';
import useFirebase from '@/hooks/useFirebase';

export default function useNicheMutation() {
  const { writeData, readDbData } = useFirebase();
  //   const [reviewNiches, setReviewNiches] = useState(null);

  async function createReviewNiche(niche: string) {
    await readDbData('/niche').then((response: any) => {
      console.log('response', response);
      const result = response === null ? [] : response;
      writeData([...result, niche], '/niche');
    });
  }
  return useRequestMutation((niche: string) => createReviewNiche(niche), {
    mutationKey: 'useNicheMutation',
    success: 'review niche created',
    error: 'unable to create niche',
  });
}
