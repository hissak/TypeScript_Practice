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

addTwo(2); 
getUpper('hello');
signUpUser('John', 'johnappleseed@gmail.com', 'password', true);
loginUser('johnappleseed@gmail.com', 'password');


export default addTwo;