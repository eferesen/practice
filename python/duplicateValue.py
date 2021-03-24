def firstDuplicateValue(array):
    # Write your code here.
    storage = {}
    for val in array:
        if not val in storage:
            storage[val] = True
        elif val in storage:
            return val
    return -1


print firstDuplicateValue([3, 2, 4, 5, 6, 7, 3, 8])
