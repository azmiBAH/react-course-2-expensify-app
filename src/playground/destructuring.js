// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadephia',
//         temp: 92
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`); 

// const { city, temp: temperature } = person.location;
// if( city && temperature ) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };
// const {name: publisherName =  'Self-published' } = book.publisher;

// console.log(publisherName);


// ARRAY DESTRUCTURING

const address = ['1299 S Junior Street', 'Philadhepia', 'Pennsylvenia', '19147'];

// destructuring by index
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
