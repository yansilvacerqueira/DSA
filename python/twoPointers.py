# that is two pointers in python, if you dont understand python... sorry
def reverseWords(s):
  res = ''
  l, r = 0, 0

  while r < len(s):
    if (s[r] != ' '):
      r += 1
    else:
      res += s[l:r + 1][::-1]
      r += 1
      l = r

  res += ' '
  res += s[l:r + 2][::-1]

  return res[1:]