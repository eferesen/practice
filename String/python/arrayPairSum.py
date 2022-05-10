def pairSum(arr, k):
  if len(arr) < 2:
    return print('too small')

  seen = set()
  output = set()

  for val in arr:
    target = k - val

    if target not in seen:
      seen.add(val)
    else:
      output.add((min(val, target), max(val, target)))
  
  print('\n'.join(map(str, list(output))))

print(pairSum([1,2,3,2], 4))