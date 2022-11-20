import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import useResume from '@/hooks/useResume';
import formatResumePrice from '@/lib/formatResumePrice';

export default function usePayment() {
  const { fetchResume, isUserSignedToNear } = useResume();
  const router = useRouter();
  const resumeId: any = router.query.template;
  const { data: nearData, status: nearStatus } = useQuery(
    ['isUserSignedToNear'],
    isUserSignedToNear,
  );
  const { data, status } = useQuery(
    ['fetchResume'],
    () => fetchResume(resumeId),
    {
      enabled: !!resumeId,
    },
  );

  const price = status === 'success' ? formatResumePrice(data.price) : 0;

  return {
    price,
    nearData,
    nearStatus,
    data,
    status,
  };
}
