const User = {
  name: 'John',
  age: 30,
  email: 'john@john.com',
  password: 'password',
  isActive: true,
};

function createUser({name: string, isActive: boolean}){}

createUser(User);

function createCourse():{name: string, isActive: boolean}{
  return {
    name: 'React',
    isActive: true,
  }
}

export {}