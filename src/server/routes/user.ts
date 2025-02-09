import { Hono } from 'hono'

const users = [
  {id: 1, name: 'tarou', age: 15},
  {id: 2, name: 'hanako', age: 20},
]

const userRoute = new Hono().basePath('/users')

.post('/', async (c) => {
  const user = await c.req.json()
  users.push({id: users.length + 1, ...user})
  return c.json(user, 201)
})

.get('/', (c) => {
  return c.json({ message: 'users fetched' })
})

.get('/:id', (c) => {
  const id = c.req.param('id')
  const user = users.find((user) => user.id === parseInt(id))
  if (!user) {
    return c.json({ message: 'user not found' }, 404)
  }
  return c.json(user)
})

.delete('/:id', (c) => {
  return c.json({ message: 'user deleted' }, 201)
})

.put('/:id', (c) => {
  return c.json({ message: 'user updated' }, 201)
})

export default userRoute
