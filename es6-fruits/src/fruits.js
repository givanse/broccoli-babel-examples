
let fruits = [
  {id: 100, name: 'strawberry'},
  {id: 101, name: 'grapefruit'},
  {id: 102, name: 'plum'}
];

for (var fruit of fruits) {
  let message = `ID: ${fruit.id} Name: ${fruit.name}`;
  
  console.log(message);
}

console.log(`List total: ${fruits.length}`);
