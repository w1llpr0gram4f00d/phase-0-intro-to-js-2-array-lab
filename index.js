// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const allCat = [...cats, name];
    return allCat;
}

function prependCat(name) {
    const allCat = [name, ...cats];
    return allCat;
}

function removeLastCat() {
    const allCat = [...cats];
    allCat.pop();
    return allCat;
}

function removeFirstCat() {
    const allCat = [...cats];
    allCat.shift();
    return allCat;
}