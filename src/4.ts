class Key{
  constructor(private signature: number = Math.floor(Math.random() * 99) + 1) {
  }
  getSignature(): number {
      return this.signature; 
  }
}


class Person {
  constructor(private key:Key=key){
  }
  getKey(){
    return this.key;
  }
}



abstract class House{
  protected door: boolean= false;
  protected tenants: Person[] = [];
  constructor(protected key: Key=key){

  }
  comeIn(tenant: Person): void {
    if (this.door) this.tenants.push(tenant); 
  }
  abstract openDoor(key: Key): void;
  
}



class MyHouse extends House{
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) this.door = true; 
  }

}



const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};