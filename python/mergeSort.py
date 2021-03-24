from random import randint


def createArray(size=10, max=50):
    return [randint(0, max) for _ in range(size)]


def merge(a, b):
    aIdx, bIdx = 0, 0
    merged = []

    while aIdx < len(a) and bIdx < len(b):
        if a[aIdx] < b[bIdx]:
            merged.append(a[aIdx])
            aIdx += 1
        else:
            merged.append(b[bIdx])
            bIdx += 1

    if aIdx == len(a):
        merged.extend(b[bIdx:])
    else:
        merged.extend(a[aIdx])

    return merged


def mergeSort(a):
    # print(a)
    if len(a) <= 1:
        return a

    midpoint = int(len(a)/2)

    left, right = mergeSort(a[:midpoint]), mergeSort(a[midpoint:])

    return merge(left, right)


arr = createArray()
# print(arr)
a = [1, 2, 6]
b = [3, 5, 7]
# merged = merge(a, b)
# print(a[:len(a)//2])
sorted = mergeSort(arr)
print(sorted)
