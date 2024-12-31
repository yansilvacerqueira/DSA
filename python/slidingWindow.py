def maximumLengthSubString(s: str) -> int:
  left = 0
  right = 0

  _max = 1
  counter = {}

  counter[s[0]] = 1

  while r < len(s) - 1:
    right += 1

    if counter.get(s[r]):
      counter[s[right]] += 1
    else:
      counter[s[right]] = 1

    while counter[s[right]] == 3:
      counter[s[left]] -= 1
      left += 1

    _max = max(_max, (right - left) + 1)

  return _max;