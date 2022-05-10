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
# === question 2======  
# Description: Given a string, find the length of the longest substring without repeating characters.

# Example1:
# Input: "abcabcbb"
# Output: 3 
# Explanation: The answer is "abc", with the length of 3. 

# Example2:
# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.        
        