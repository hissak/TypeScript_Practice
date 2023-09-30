function detectType(val: number | string) {
  if(typeof val === 'string'){
    return val.toUpperCase();
  }
  return val.toFixed(2);
}

interface User {
  name: string;
  age: number;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

function isAdmin(account: User | Admin){
  if('role' in account){
    return true;
  }
  return false;
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
  return (pet as Fish).swim() !== undefined;
}

function getFood(pet: Fish | Bird){
  if('swim' in pet){
    return pet.swim();
  }
  return pet.fly();
}