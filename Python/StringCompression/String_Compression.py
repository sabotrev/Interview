from collections import OrderedDict


class Solution(object):
    # Brute force
    def compress1(self, chars):
        res = []
        tempChar = chars[0]
        tempCount = 0
        for char in chars:
            if (tempChar == char):
                tempCount += 1
            else:
                res.append(tempChar)
                if (tempCount != 1):
                    res.append(tempCount)
                tempCount = 1
                tempChar = char
        res.append(tempChar)
        if (tempCount != 1):
            res.append(tempCount)
        return res

    # Better way -> dictionary
    def compress2(self, chars):
        res = []
        dictionary = dict.fromkeys(chars, 0)
        for char in chars:
            dictionary[char] += 1

        for key, value in dictionary.items():
            res.append(key)
            if value > 1:
                res.append(value)

        return res


print(Solution().compress1(['a', 'a', 'b', 'c', 'c', 'c']))
# ['a', '2', 'b', 'c', '3']
print(Solution().compress1(['a', 'a', 'a', 'b', 'c', 'c', 'c', 'd']))
# ['a', '3', 'b', 'c', '3', 'd']
print(Solution().compress2(['a', 'a', 'b', 'c', 'c', 'c']))
['a', '2', 'b', 'c', '3']
print(Solution().compress2(['a', 'a', 'a', 'b', 'c', 'c', 'c', 'd']))
# ['a', '3', 'b', 'c', '3', 'd']
