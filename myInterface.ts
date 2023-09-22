interface User {
  email: string,
  userId: number,
  dbId?: number
  startTrail: () => string
  // startTrail(): string
  getCoupon?: (coupon: string, value: number) => number
}

const user: User = {
  email: 'user@use.com',
  userId: 20,
  dbId: 1,
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (coupon: 'xyz' | string, value: 10 | number) => {
    return 2
  }
}


