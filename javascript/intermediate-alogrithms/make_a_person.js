var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let [firstName, lastName] = firstAndLast.split(" ");
  //console.log(firstName, lastName)

  this.getFirstName = function(){
    return firstName;
  }

  this.getLastName = function(){
    return lastName;
  }

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  }

  this.setFirstName = function (first){
    firstName = first;
    return firstName;
  }

  this.setLastName = function (last){
    lastName = last;
    return lastName;
  }

  this.setFullName = function(firstAndLast){
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
    return `${firstName} ${lastName}`;
  }
  //return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFirstName();
bob.getLastName();
bob.getFullName();
//bob.setFirstName();
// bob.setLastName();
// bob.setFullName();