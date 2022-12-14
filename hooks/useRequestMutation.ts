import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';

import useToast from '@/hooks/useToast';

type mutationDataType = {
  mutationKey: string;
  success: string;
  error: string;
  onSuccessMethod?: (variables: any) => void;
  onErrorMethod?: () => void;
  onSettledMethod?: () => void;
};

type mutationFnType = (variables: any) => Promise<any> | any;

export default function useRequestMutation(
  mutationFn: mutationFnType,
  mutationData: mutationDataType,
) {
  const { loadingToast, updateToast } = useToast();
  const toastID = useRef(null);

  return useMutation(mutationFn, {
    mutationKey: [mutationData.mutationKey],
    onMutate: () => {
      loadingToast(toastID);
    },
    onSuccess: (data: any, variables) => {
      if (mutationData.onSuccessMethod) {
        mutationData.onSuccessMethod(variables);
      }
      updateToast(toastID, 'success', mutationData.success);
    },
    onError: (err: any) => {
      console.log('err', err);
      if (mutationData.onErrorMethod) {
        mutationData.onErrorMethod();
      }
      updateToast(toastID, 'error', mutationData.error);
    },
  });
}
