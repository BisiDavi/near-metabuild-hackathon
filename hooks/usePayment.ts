import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import useResume from '@/hooks/useResume';
import formatResumePrice from '@/lib/formatResumePrice';
import { buyResume } from '@/lib/marketplace';
import { resumeType } from '@/types';

export default function usePayment() {
  const { fetchResume, isUserSignedToNear } = useResume();
  const router = useRouter();
  const resumeId: any = router.query.template;
  const { data: nearData, status: nearStatus } = useQuery(
    ['isUserSignedToNear'],
    isUserSignedToNear,
  );
  const { data, status } = useQuery<resumeType>(
    ['fetchResume'],
    () => fetchResume(resumeId),
    {
      enabled: !!resumeId,
    },
  );

  const mutation = useMutation(
    ({ id, price }: { id: string; price: string }) => buyResume({ id, price }),
    {
      mutationKey: ['makePayment'],
      onSuccess: async (data) => {
        console.log('data', data);
        toast.success('Payment successful');
      },
      onError: async (error) => {
        console.log('error', error);
        toast.error('Error making payment');
      },
    },
  );

  const price = status === 'success' ? formatResumePrice(data.price) : 0;

  return {
    price,
    nearData,
    nearStatus,
    data,
    status,
    mutation,
  };
}
