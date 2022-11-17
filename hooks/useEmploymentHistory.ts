import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';


export default function useEmploymentHistory() {
  const { cvs } = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

  
}
