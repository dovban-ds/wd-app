import { getActivities } from '@api/api'
import { queryClient } from '@api/queryClient'
import { useMutation } from '@tanstack/react-query'

export const useAddToFavorites = () => {
  return useMutation({
    mutationFn: signal => getActivities(signal),
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['fetch', 'activities'] })
    },
  })
}
