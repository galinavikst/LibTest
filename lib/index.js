////////for 17.02 interview//////////////////////////////////////////
const sentense1 =
  'The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"';
const sentense2 =
  "C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup";

const word = "language";

function getUniqueSymbol(str) {
  let result = "";
  const arr = str.split(" ");
  arr.forEach((el) => {
    result += getUniqueFromWord2(el);
  });
  return getUniqueFromWord2(result);
}

function getUniqueFromWord1(word) {
  let res;
  for (let i = 0; i < word.length; i++) {
    let unique = true;
    for (let j = 0; j < word.length; j++) {
      if (i !== j && word[i] === word[j]) {
        unique = false;
        break;
      }
    }
    if (unique) {
      res = word[i];

      return res;
    }
  }
  return res;
}

function getUniqueFromWord2(word) {
  let res;
  if (typeof word !== "string" || word.length === 0) return res;
  for (let i = 0; i < word.length; i++) {
    let s = word[i];
    if (s === word[i] && word.indexOf(s, i + 1) === -1) {
      res = s;
      return res;
    }
  }
  return res;
}

//console.log(getUniqueSymbol(sentense1));
//console.log(getUniqueSymbol(sentense2));
//////////////////////////////////////////////////
