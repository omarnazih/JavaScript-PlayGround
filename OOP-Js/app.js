function person(name, dob){
  this.name = name;
  this.dob = dob;

  // This is called a method
  // A method is function inside an object
  this.calculateAge = function(){
    const dateOfBirth = new Date(this.dob);
    const time = dateOfBirth.getDay();
    
    let val;
    val = time ;
    console.log(val);
  }

}

const omar = new person('omar', '10-12-1993');
const ahmed = new person('ahmed', '10-12-1978');
const fawzi = new person('fawzi', '10-12-1992');

console.log(omar.calculateAge());

class Person{

  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dob);
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  calculateAge(){
    const diff = Date.now() - this.dateOfBirth.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  gotMarried(newLastName){
    return `${this.firstName} ${newLastName}`;
  }

}


class developer extends Person{
  constructor(firstName, lastName, skills){
    super(firstName,lastName);

    this.skills = skills;
  }
}

const omar = new Person('omar', 'nazih', '10-12-1998');
const jesse = new Person('jesse', 'smith', '10-12-1988');

const dev1= new developer('omar', 'nazih', 'js, html, css');

console.log(dev1);


