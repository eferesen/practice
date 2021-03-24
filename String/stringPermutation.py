def isStringPermuation(str, otherStr):
  chars = {}
  if len(str) != len(otherStr):
    return False
  # populate the dictionary
  for char in str:
    if char in chars:
      chars[char] += 1
    else:
      chars[char] = 1

  for char in otherStr:
    if char in chars:
      chars[char] -= 1
    else:
      return False
    
  print(chars)
  return True
    
     
print(isStringPermuation('hello', 'holle'))