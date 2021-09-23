// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
const newcats = ["Broom"];
function appendCat () {
    let newcats = ([...cats, "Broom"]);
    return newcats;
}
const footballcat = ["Arnold"];
function prependCat () {
    let footballcat =(["Arnold", ...cats])
    return footballcat;
}
function removeLastCat () {
    return cats.slice(0, -1);
}
function removeFirstCat () {
    const newcats = cats.slice (1);
    return newcats;
}