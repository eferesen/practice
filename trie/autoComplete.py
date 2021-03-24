# https://github.com/techleadhd/three-coding-problems/blob/master/autocomplete.py
class Node:
    def __init__(self, children, isWord):
        self.children = children
        self.isWord = isWord


class Potential:

    def buildTrie(self, words):
        self.trie = Node({}, False)
        for word in words:
            current = self.trie
            for char in word:
                if not char in current.children:
                    # add current char
                    current.children[char] = Node({}, False)
                    #print('added ', char)
                current = current.children[char]
            # Mark the current word as a Node
            current.isWord = True
            #print('word added')

    def printTree(self):
        current = self.trie
        print(current.children)
        for char in current.children:
            print(char)
            current = current.children[char]
        self.printTree(current)

    # def autoComplete(self, prefix):


words = ['dog', 'dark', 'cat', 'door', 'dodge']
searchTerm = ['do']

po = Potential()
po.buildTrie(words)
po.printTree()
