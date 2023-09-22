interface User {
  email: string,
  userId: number,
  dbId?: number
}

const user: User = {
  email: 'user@use.com',
  userId: 20,
  dbId: 1
}