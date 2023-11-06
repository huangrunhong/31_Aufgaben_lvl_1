// ====================================
//         Loops-Level-1_1
// ====================================
console.log("%c======Loops-Level-1_1======", "color:yellowgreen");
for (let i = 1; i <= 10; i++) {
  console.log("Hello World " + i);
}

// ====================================
//         Loops-Level-1_1
// ====================================
console.log("%c======Loops-Level-1_1======", "color:yellowgreen");
let numArray = [];
for (let i = 0; i <= 10; i++) {
  numArray.push(i);
}
console.log(numArray);

// ====================================
//         Loops-Level-1_4
// ====================================
console.log("%c======Loops-Level-1_4======", "color:yellowgreen");
const names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// ====================================
//         Loops-Level-1_5
// ====================================
console.log("%c======Loops-Level-1_5======", "color:yellowgreen");
let apple1 = { color: "red", size: "big" };
let apple2 = { color: "green", size: "small" };
let apple3 = { color: "yellow", size: "big" };
let apples = [apple1, apple2, apple3];
for (let i = 0; i < apples.length; i++) {
  console.log(apples[i].size);
}

// ====================================
//         Loops-Level-1_6
// ====================================
console.log("%c======Loops-Level-1_6======", "color:yellowgreen");
let imageArr = [];
for (let i = 1; i <= 100; i++) {
  imageArr.push("image_" + i + ".jpg");
}
console.log(imageArr);

// ====================================
//         Loops-Level-1_9
// ====================================
console.log("%c======Loops-Level-1_9======", "color:yellowgreen");

let words = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];
const wordInput = document.body.querySelector("#wordInput");
const numberInput = document.body.querySelector("#numberInput");
const wordsOutput = document.body.querySelector("#wordsOutput");
const newWords = [...words];
const wordAdd = () => {
  newWords.push(wordInput.value);
};
const reset = () => {
  wordsOutput.innerHTML = "";
};

const wordFilter = () => {
  reset();
  for (let i = 0; i < newWords.length; i++) {
    if (Number(numberInput.value) === newWords[i].length) {
      console.log(newWords[i]);
      wordsOutput.innerHTML += newWords[i] + "<br>";
    }
  }
};
