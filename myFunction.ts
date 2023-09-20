function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string, 
  isPaid: boolean) {
  
}

let loginUser = (email: string, password: string, isPaid: boolean = false) => {
}

let getValue = (myVl: number): number => {
  return myVl;
}

const heroes = ['thor', 'ironman', 'spiderman'];
heroes.map((hero): string => {
  return hero.toUpperCase();
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

addTwo(2); 
getUpper('hello');
signUpUser('John', 'johnappleseed@gmail.com', 'password', true);
loginUser('johnappleseed@gmail.com', 'password');


export default addTwo;