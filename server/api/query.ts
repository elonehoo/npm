import { $fetch } from 'ofetch'
import { baseURL } from '~/server/constants'

export default defineEventHandler((event) => {
  const {query} = getQuery(event)
  return $fetch(`${baseURL}/${query}`)
})
