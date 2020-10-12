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