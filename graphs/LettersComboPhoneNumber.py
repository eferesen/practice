class Solution:
  # https://www.youtube.com/watch?v=cIOxZ7bNh7w

  def __init__(self):
    self.mapping = {
            "2":"abc",
            "3":"def",
            "4":"ghi",
            "5":"jkl",
            "6":"mno",
            "7":"pqrs",
            "8":"tuv",
            "9":"wxyz",
        }

  def letterCombination(self, digits):
    combination = []

    def makeCombos(digits, path):
      if not digits:
        combination.append(path)
        return combination

      first, rest = digits[0], digits[1:]
      letters = self.mapping[first]

      for letter in letters:
        makeCombos(rest, path + letter)

      return combination

    combination = makeCombos(digits, '', )
    
    return combination


sol = Solution()
print(sol.letterCombination('23'))