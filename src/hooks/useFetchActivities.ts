import { getActivities } from '@api/api'
import { useQuery } from '@tanstack/react-query'

export const useFetchActivities = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['fetch', 'activities'],
    queryFn: getActivities,
  })

  return { data, isLoading }
}
