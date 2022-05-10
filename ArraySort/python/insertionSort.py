def insertionSort(array):
    for i in range(1, len(array)):
        j = i
        print("for Loop I index", i)
        while j > 0 and array[j] < array[j - 1]:
            print("Before J Index ", j)
            swap(j, j - 1, array)
            j -= 1
            print("After J Index", j)
            print(array)
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


arr = [22, 3, 2, 1, 41]
print(insertionSort(arr))
