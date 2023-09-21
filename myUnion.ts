let score: number | string = 50;

type Admin = {
  name: string;
  id: number;
};

type User = {
  name: string;
  isActive: boolean;
};

let hassan: User | Admin = {name: 'Hassan', id: 1};

hassan = {name: 'Hassan', id: 2};

function getDbId(id: number | string) {
  if(typeof id === 'string') {
    return id.toUpperCase();
  } else {
    return id.toFixed();
  }
}