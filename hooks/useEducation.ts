import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

export default function useEducation() {
  const { cvs } = useAppSelector((state) => state.builder);
  const dispatch = useAppDispatch();

  function addEducation(){
    
  }

}
