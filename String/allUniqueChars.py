word = 'abcdefghii'
dictionary = {}

def isUnique(word):
  for char in word:
    if char in dictionary:
      print('Duplicate found')
      dictionary[char] += 1
      return False
    else:
      dictionary[char] = 1
  return True

def isUniqueA(s):
  return len(set(s)) == len(s)

print(isUnique('abc'))

print(isUniqueA('ancbxba'))