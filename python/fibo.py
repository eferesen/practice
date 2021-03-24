def getNthFibo(n, calculated={1: 0, 2: 1, 3: 1}):
    if n in calculated:
        return calculated[n]

    calculated[n] = getNthFibo(n - 1, calculated) + \
        getNthFibo(n - 1, calculated)
    return calculated[n]


print(getNthFibo(2))
