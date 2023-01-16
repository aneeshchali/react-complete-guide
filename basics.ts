//primitives
//LowerCase should be used in type Declaration

let age: number;
age = 12;

let userName: string;
userName = "MAX";

let isInstructor: boolean;
isInstructor = true;

//More Complex Type

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//obj decleration with key of different types
type person = {
  name: string;
  age: number;
};

let Person: person;

Person = {
  name: "MAX",
  age: 32,
};

//inValid object due to declared type
// person = { isemployee: true };

//array of objects

let people: person[];

people = [
  {
    name: "MAX",
    age: 32,
  },
  {
    name: "JHON",
    age: 32,
  },
];

//Type Inference multi type

let course: string | number = "React-The Complete Guide";

course = 12341;

// Functions and Types

function add(a: number, b: number): number | string {
  return a + b;
}

//Below function never returns thus void type
function printOut(value: any): void {
  console.log(value);
}

//Generics

function insertAtBegining<T>(array: T[], value: T) {
  const newarray = [value, ...array];
  return newarray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1);
const stringArray = insertAtBegining(["a", "s", "d"], "g");

updatedArray[0].split("");
stringArray[0].split("");
