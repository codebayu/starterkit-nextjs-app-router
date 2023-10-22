import axios from 'axios'

export async function getPostServices() {
  const EXAMPLE_API = 'https://jsonplaceholder.typicode.com/posts'
  try {
    const response = await axios.get(EXAMPLE_API)
    if (response?.status !== 200) return {}
    return response.data
  } catch (error) {
    return error
  }
}
