const students = [
    {id: 101, name: "Aman", marks: 82, course: "Java"},
    {id: 102, name: "Priya", marks: 95, course: "Python"},
    {id: 103, name: "Rahul", marks: 67, course: "Java"},
    {id: 104, name: "Neha", marks: 76, course: "Web"},
    {id: 105, name: "Rohan", marks: 88, course: "Python"}
];

// TASK 1 - ADD A STUDENT(PUSH)
students.push({id: 106, name: "Simran", marks: 91, course: "Java"});
console.log("Task 1"); // it prints the heading
console.log(students); // it prints the updated array after pushing a student 

// TASK 2 - REMOVE LAST STUDENT(POP)
let removeLastStudent = students.pop(); // it removes the last element

console.log("Task 2");
console.log("removeLastStudent"); // returns removed student 

// TASK 3 - ADD STUDENT AT BEGINNING (UNSHIFT)
students.unshift({ // it adds an element at the beginning of the array 
    id: 100, 
    name: "Ankit",
    marks: 80, 
    course: "Web"
});

console.log("Task 3");
console.log(students);


// TASK 4 - REMOVE FIRST STUDENT (SHIFT) 
let removeFirstStudent = students.shift(); // if removes the first element of the array 
console.log(" Task 4");
console.log(removeFirstStudent);


// TASK 5 - REMOVE RAHUL (id-103) AND INSERT KARAN
let index = students.findIndex(student => student.id === 103); // searches for the index where id is 103 
students.splice(index, 1, { // here index refers the position where rahul is found , 1 removes one element and object -inserting the object at same positon 
    id: 107,
    name: "Karan",
    marks: 78,
    course: "Java"
});

console.log("Task 5");
console.log(students);


// TASK 6 - CREATE NEW ARRAY WITH FIRST THREE STUDENTS
let firstThreeStudents = student.slice(0,3);

console.log("Task 6");
console.log("firstThreeStudents");


// TASK 7 - for...of
console.log("Task 7"); // it goes through every object one by one 
for(let student of students){
    console.log(`${student.name} - ${student.course} - ${student.marks}`);
}


// TASK 8 - forEach()
console.log("Task 8"); // visits every element once 
students.forEach(student => {console.log(student.name);
});


// TASK 9 - map() // it creates a new array 
let names = students.map(student => student.name); // take only the name property from every object 
console.log("Task 9");
console.log(names);


//  TASK 10 - filter() returns only those students where marks >= 80
let topperStudents = students.filter(student=>student.marks >= 80);
console.log("Task 10");
console.log(topperStudents);


// TASK 11 - reduce()
let totalMarks = students.reduce((sum, student) => {return sum + student.marks;
},0); 
// it sums all the marks for index 0,1,2 iteration by iteration 

let averageMarks = totalMarks/students.length; // find average of the marks 

console.log("Task 11");
console.log("Total Marks =", totalMarks);
console.log("Average Marks =", averageMarks);


// TASK 12 - sort();
let ascending = [...student]; // creates a copy of the array so og array remains unchanged 
ascending.sort((a,b) => a.marks - b.marks);

// ascending order 
console.log("Ascening Order");
ascending.forEach(student => console.log(student.marks));

let descending = [...students];
descending.sort((a,b) => b.marks - a.marks);
 
// descending order 
console.log("Descending Order");
descending.forEach(student => console.log(student.marks));
