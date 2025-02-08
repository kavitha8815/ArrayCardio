//ArrayCardio: It is a concept of javascript programming partivularly in exercises designed to help developers become more proficient with array methods.
//The idea is to practice and strenghen ths kills in javacsript arrays through various challenges and taskks similra to how cardio exercises strenghten your heart and muscles.

const people = [
    {name: 'Kavitha', year: 2002},
    {name: 'Kavitha', year: 2002},
    {name: 'Kavitha', year: 2002},
    {name: 'Kavitha', year: 2002}
];
console.table(people);  

const comments = [
    {text: 'Love this!', id: 5234},
    {text: 'Super good', id: 6724},
    {text: 'You ar the best', id: 9875},
    {text: 'Poorna is my favourite food',id: 1035},
    {text: 'Nice Nice Nice!', id: 1235}
];

console.table(comments);

const isAdult = people.some(person=>((new Date()).getFullYear()) - person.year>= 19);

console.log({isAdult});
//Array.prototype.every()//is everyone 19?
const allAdults = people.every(person => ((new Date()).getFullYear())-person.year>=19);
console.log({allAdults});

//Array.prototype.find()
///Find is like filter, but instead returns just the one you are looking
//find the comment with the iD of ID of 6724

const scomment = comments.find(comment => comment.id===6724);
console.log(comment);
const index = comments.findIndex(comment = > comment.id === 6724);
console.log(index);

const newComments = [
    ...comments.slice(0,index),
    ...comments.slice(index+1)
];
console.log(newComments);
