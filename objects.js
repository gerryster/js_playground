function MyConstructor() {
  this.name = "testInstance";
  return this.name; // it does not matter what this returns when being called with new
}

var my_obj = new MyConstructor();
var my_thing = MyConstructor();
console.log("constructor produces the object: ", my_obj);
console.log("constructor called as function produces the return value of the function: ", my_thing);
