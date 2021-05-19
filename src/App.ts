import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let values: [string, string, number] = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');
});

// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'Mario', age: 54 });
// let docTwo = addUID('Hello');

console.log(docOne.age);

// with interface

// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const docThree: Resource<object> = {
//   uid: 5,
//   resourceName: 'Mario',
//   data: { goal: 2 },
// };

// const docFour: Resource<string[]> = {
//   uid: 4,
//   resourceName: 'Shaun',
//   data: ['apple juice', 'orange juice'],
// };

// console.log(docThree, docFour);

// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
  FOOD,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uid: 5,
  resourceType: ResourceType.PERSON,
  data: { goal: 2 },
};

const docFour: Resource<string[]> = {
  uid: 4,
  resourceType: ResourceType.FOOD,
  data: ['apple juice', 'orange juice'],
};

// tuples

let arr = ['shah', 26, true];
arr[0] = false;
arr[1] = 'orange';
arr = [87, true, 'ninja'];

let tup: [string, number, boolean] = ['shah', 26, true];
tup[2] = false;
tup[1] = 28;

let student: [string, number, boolean];
student = ['chun-li', 26, true];
