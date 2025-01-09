
/**
 * input "ab-cd"
 * output "dc-ba"
 * input "a-bC-dEf=ghlj!!"
 * output "j-lh-gfE=dCba!!"
 * verificar caracteres especiais
 *
 * caso n seja caractere especial trocar as posicoes
 * usar two pointers
 */
function isSpecialChar(char) {
  const code = char.charCodeAt(0);

  return !(
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57)
  );
}

function reversed(s) {
  let arr = s.split('');

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (isSpecialChar(arr[l])) {
      l++;
      continue;
    }

    if (isSpecialChar(arr[r])) {
      r--;
      continue;
    }

    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  return arr.join('');
}

console.log(reversed("ab-cd"));
console.log(reversed("a-bC-dEf=ghlj!!"));