const score: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["a", "b", "c", "d", "e"];

function identityOne(val: boolean|number|string): boolean|number|string {
  return val;
}

function identityTwo(val:any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}// Type can be shortened to T

identityThree(123);

interface Bottle{
  brand: string;
  id: number;
}

identityThree<Bottle>({brand: "Coke", id: 123});