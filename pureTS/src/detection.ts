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


interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape){
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
  if (shape.kind === 'square') {
    return shape.sideLength ** 2;
  }
  return shape.width * shape.height;
}

function getArea(shape: Shape){
  switch(shape.kind){
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    default:
      const _defaultShape: never = shape;
  }
}