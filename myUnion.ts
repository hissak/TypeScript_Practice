let score: number | string = 50;

type Admin = {
  name: string;
  id: number;
};

let hassan: User | Admin = {name: 'Hassan', id: 1};

hassan = {name: 'Hassan', id: 2};
