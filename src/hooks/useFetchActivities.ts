import { getActivities } from '@api/api'
import { useQuery } from '@tanstack/react-query'

export const useFetchActivities = () => {
  const { data, isPending, isSuccess } = useQuery({
    queryKey: ['fetch', 'activities'],
    queryFn: getActivities,
  })

  return { data, isPending, isSuccess }
}
