import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
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
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    ResourceType[ResourceType["FOOD"] = 5] = "FOOD";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 5,
    resourceType: ResourceType.PERSON,
    data: { goal: 2 },
};
const docFour = {
    uid: 4,
    resourceType: ResourceType.FOOD,
    data: ['apple juice', 'orange juice'],
};
// tuples
let arr = ['shah', 26, true];
arr[0] = false;
arr[1] = 'orange';
arr = [87, true, 'ninja'];
let tup = ['shah', 26, true];
tup[2] = false;
tup[1] = 28;
let student;
student = ['chun-li', 26, true];
