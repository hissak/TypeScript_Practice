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

createUser(User);

function createCourse():{name: string, isActive: boolean}{
  return {
    name: 'React',
    isActive: true,
  }
}

type User = {
  name: string,
  email: string,
  isActive: boolean,
}

type Mystring = string;

export {}