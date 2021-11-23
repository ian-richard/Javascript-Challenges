/*
Description:
[source: imgur.com]

The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.
Notes

The first and/or last names are never null, but may be empty.
Task

Fix the bug so we can all go home early.

*/


class Dinglemouse_og{

    constructor( firstName, lastName ){
        if(firstName != '') this.firstName = firstName
        if(lastName != '') this.lastName = lastName
    }
    
    getFullName_og(){
      let fullName = '';
      this.firstName && this.lastName ? fullName = this.firstName + ' ' + this.lastName : fullName = this.firstName || this.lastName || ""; 
      return fullName;
    }
  }

  //refactor
  class Dinglemouse{

    constructor( firstName, lastName ){
      this._firstName=firstName;
      this._lastName=lastName;
    }
    
    getFullName(){
      return `${this._firstName} ${this._lastName}`.trim();
    }
    
  }

console.log(new Dinglemouse("Clint", "Eastwood").getFullName() === "Clint Eastwood");
console.log(new Dinglemouse("Clint", "").getFullName() === "Clint");
console.log(new Dinglemouse("", "Eastwood").getFullName() === "Eastwood");
console.log(new Dinglemouse("", "").getFullName() === "");