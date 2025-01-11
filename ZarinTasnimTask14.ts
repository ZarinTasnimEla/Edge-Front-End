// Implementing Alias
type a = string | number;
type obj = {
  id: a;
  name: string;
  //if ? is added then it is not mandatory to write this property in b:obj
  age?: number;
};
const b: obj = { id: 5, name: "Mitti" };
const d: obj = { id: 7, name: "Ela" };

console.log(d.id);
console.log(d.name);

// Implementing Function
type z = string | number;
function add(ab: z) {
  console.log(ab);
}
add(6);
