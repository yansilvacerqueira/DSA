/**
 * we can call this problem of canonical form
 * Canonical form means some value can be represented of different forms.

  Space -> O(N)  Time -> O(N LOG N)
*/
function groupAnagrams(strs) {
  const map = new Map();

  for (const s of strs) {
    const sorted = s.split('').sort().join('');

    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    map.get(sorted).push(s);
  }

  return Array.from(map.values());
}