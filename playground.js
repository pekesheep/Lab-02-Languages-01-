// ********* 1. Array operations **********

const arrayTest = [1, 2, 3, "a", "b", "c"];

/* 1º- Implementa una función head (inmutable), tal que, dado un array como entrada 
extraiga y devuelva su primer elemento. Utiliza destructuring. */

const head = array => {
    const [first] = array;
    return first;
};

console.log(head(arrayTest));

/* 2º- Implementa una función tail (inmutable), tal que, dado un array como entrada 
devuelta todos menos el primer elemento. Utiliza rest operator. */

const tail = array => {
    const [, ...rest] = array;
    return rest;
};

console.log(tail(arrayTest));

/* 3º- Implementa una función init (inmutable), tal que, dado un array como entrada 
devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype. */

const init = array => array.slice(0, -1);

console.log(init(arrayTest));

/* 4º- Implementa una función last (inmutable), tal que, dado un array como entrada
 devuelva el último elemento. */

const last = array => array[array.length - 1];

console.log(last(arrayTest));

console.log("--------------");

// ********* 2. Concat **********

const concat = (a, b, ...extraArg) => [...a, ...b, ...extraArg];

console.log(concat("abc", "def", "test"));

console.log("--------------");

// ********* 3. Clone Merge **********

/* 1º- Implementa una función clone que, a partir de un objeto de entrada
 source devuelva un nuevo objeto con las propiedades de source. */

function clone(source) {
    const newObject = Object.assign({}, source)
    return newObject;
};

console.log(clone({ name: "Guillermo", age: 30, city: "Zaragoza" }));

/* 2º- Implementa una función merge que, dados dos objetos de entrada 
source y target, devuelva un nuevo objeto con todas las propiedades de 
target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target*/

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };


function merge(source, target) {
    const newObject = { ...target, ...source };
    return newObject;
}

console.log(merge(a, b));

console.log("--------------");

// ********* 4. Read Books **********

/* Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha 
leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. 
En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te
 ayudará a buscar según un patrón. */

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
    const book = books.find((book => book.title === titleToSearch));
    return (book) ? book.isRead : false;
};

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

console.log("--------------");

// ********* 5. Slot Machine **********

/* El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada 
vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un 
contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática 
y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario 
habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por 
consola el mensaje:. */

class SlothMachine {
    constructor() {
        this.coins = 0;
    }
    play() {
        this.coins++;
        const rul1 = Math.floor(Math.random() * 2);
        const rul2 = Math.floor(Math.random() * 2);
        const rul3 = Math.floor(Math.random() * 2);
        if (rul1 && rul2 && rul3) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else { console.log("Good luck next time!!"); }
    }
};



const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
