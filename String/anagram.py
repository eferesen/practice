def isAnagram(strA, strB):
  if len(strA) != len(strB):
    return False
  strA = strA.replace(" ", "")
  strB = strB.replace(" ", "")
  
  keeper = {}

  for char in strA:
    if char not in keeper:
      keeper[char] = 1
    else:
      keeper[char] += 1

  for char in strB:
    if char in keeper:
      keeper[char] -= 1
    else:
      keeper[char] = 1

  print(keeper)
  for key in keeper:
    if keeper[key] > 0:
      return False
  return True

print(isAnagram('abc', 'def'))
