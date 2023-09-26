class User {
  email: string;
  name: string;
  protected city: string = 'Seoul';
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
  get getName(){
    return this.name;
  }
  set setName(name: string){
    this.name = name;
  }
}

const user = new User('h', 'h')

class SubUser extends User {
  isFamily: boolean = true;
  changeCity(city: string){
    this.city = city;
  }
}
