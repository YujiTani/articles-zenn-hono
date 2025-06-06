import type { AppType } from './server'
import { hc } from 'hono/client'

const client = hc<AppType>('http://localhost:3000/')

const res = await client.api.users.$post({
  json: {
    name: 'tarou',
    age: 15,
  }
})

if (res.ok) {
  const user = await res.json()
  console.log(res.status, 'post success', user)
} else {
  console.log(res.status, 'post error')
}
