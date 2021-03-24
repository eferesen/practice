def arrayOfProducts(array):
    product = [1 for _ in range(len(array))]
    leftProduct = [1 for _ in range(len(array))]
    rightProduct = [1 for _ in range(len(array))]

    leftRunningProduct = 1
    for i in range(len(array)):
        leftProduct[i] = leftRunningProduct
        leftRunningProduct *= array[i]

    rightRunningProduct = 1
    for i in reversed(range(len(array))):
        print[array[i]]
        rightProduct[i] = rightRunningProduct
        rightRunningProduct *= array[i]

    for i in range(len(array)):
        product[i] = leftProduct[i] * rightProduct[i]

    return product


some = arrayOfProducts([5, 1, 4, 2])
print some
