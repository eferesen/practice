def reverseSentence(word):
    arrayCollection = []
    createWord = ""
    for idx in range(len(word)):
        if not word[idx] == " ":
            if (idx + 1 == len(word)):
                createWord = createWord + word[idx]
                arrayCollection.append(createWord)
            else:
                createWord = createWord + word[idx]
        elif word[idx] == " ":
            arrayCollection.append(createWord)
            arrayCollection.append(" ")
            createWord = ""
    revArray(arrayCollection)
    return "".join(arrayCollection)


def revArray(arr):
    print(arr)
    start = 0
    end = len(arr) - 1

    while(start < end):
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1


print(reverseSentence("Hello World "))
