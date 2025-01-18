function containsAllLetters(substring, letters) {
  let letterCount = {};

  // Conta a frequência de cada letra em 'letters'
  for (let char of letters) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  // Conta a frequência de cada letra no 'substring'
  for (let char of substring) {
    if (letterCount[char] !== undefined) {
      letterCount[char]--;
    }
  }

  // Verifica se todas as letras necessárias estão presentes na quantidade correta
  for (let char in letterCount) {
    if (letterCount[char] > 0) {
      return false;
    }
  }

  return true;
}

function MinWindowSubstring(strArr) {
  let s = strArr[0];
  let letters = strArr[1];
  let minWindow = null;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substring = s.substring(i, j);
      if (containsAllLetters(substring, letters)) {
        if (minWindow === null || substring.length < minWindow.length) {
          minWindow = substring;
        }
      }
    }
  }

  return minWindow;
}

// Exemplo de teste
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])); // Output esperado: aksfaje

function converteTempo(entrada) {
  const horas = Math.floor(entrada / 60); // Divide os minutos por 60 para obter as horas
  const minutos = entrada % 60; // O restante da divisão são os minutos

  return `${horas}:${minutos}`;
}

console.log(converteTempo(126)); // Saída: 2:6
console.log(converteTempo(45)); // Saída: 0:45

let animals = [1,2,3]
