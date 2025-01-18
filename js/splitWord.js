function WordSplit(strArr) {
  let [toCompare, sequence] = strArr;
  sequence = sequence.split(",");

  for (let i = 0; i < sequence.length; i++) {
    for (let j = 1; j < sequence.length; j++) {
      const newWord = sequence[i] + sequence[j];
      if (newWord === toCompare) {
        return sequence[i] + "," + sequence[j];
      }
    }
  }

  return "not possible";
}

console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]));
