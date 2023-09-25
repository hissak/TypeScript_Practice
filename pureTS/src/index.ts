class User {
  email: string;
  name: string;
  private readonly city: string = 'Seoul';
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
}

const user = new User('h', 'h')

