import api from '@api/axiosInstance'

export const getActivities = async ({ signal }) => {
  try {
    const response = await api.get('/activities', { signal })
    return response.data
  } catch (error) {
    console.error('Error fetching activities:', error)
    throw error
  }
}

export const addToFavorites = async ({ signal }) => {
  try {
    const response = await api.post('/favorites', { signal })
    return response.data
  } catch (error) {
    console.error('Error adding to favorites:', error)
    throw error
  }
}
