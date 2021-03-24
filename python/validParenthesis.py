def validParenthesis(s):
    stack = []
    mapping = {')': '(', ']': '[', '}': '{'}

    for char in s:

        if char in mapping:  # find first closing paren in s
            if stack:
                topElem = stack.pop()  # Get the last element before the first closing paren
            else:
                topElem = 'X'

            # pull key value for current char and compare to char element they must equal
            if mapping[char] != topElem:
                return False
        else:
            # keep adding opening brackets
            stack.append(char)
    print(stack)
    return not stack


strOne = "{{[[(())]]}}"
print(validParenthesis(strOne))
