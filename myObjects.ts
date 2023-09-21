const User = {
  name: 'John',
  age: 30,
  email: 'john@john.com',
  password: 'password',
  isActive: true,
};

function createUser(user: User): User{
  return user;
}

// createUser(User);

function createCourse():{name: string, isActive: boolean}{
  return {
    name: 'React',
    isActive: true,
  }
}

type User = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  creditCard?: number
}

let myUser: User = {
  _id: '123',
  name: 'John',
  email: '1@1.com',
  isActive: true,
  creditCard: 123456789
}



type Mystring = string;

export {}