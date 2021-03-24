arrA = [1,2,3,4]
arrB = [1,4,3,2,]

arrC = [1,2,3,4]
arrD = [1,2,3,5]

def areEqual(arrA, arrB):

  seen = {}
  for a in arrA:
    if a in seen:
      seen[a] += 1
    else:
      seen[a] = 1

  for b in arrB:
    if b in seen:
      seen[b] -= 1
    else:  
      return False

  return True


print(areEqual(arrA, arrB))