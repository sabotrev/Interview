fun merge_sort(list: List<Int>): List<Int> {
    if (list.size <= 1) {
        return list
    }

    val middle = list.size / 2
    var left = list.subList(0, middle);
    var right = list.subList(middle, list.size);

    return merge(merge_sort(left), merge_sort(right))
}

fun merge(leftList: List<Int>, rightList: List<Int>): List<Int>  {
    var leftIndex = 0
    var rightIndex = 0
    var newList : MutableList<Int> = mutableListOf()

    while (leftIndex < leftList.count() && rightIndex < rightList.count()) {
        if (leftList[leftIndex] <= rightList[rightIndex]) {
            newList.add(leftList[leftIndex])
            leftIndex++
        } else {
            newList.add(rightList[rightIndex])
            rightIndex++
        }
    }

    while (leftIndex < leftList.size) {
        newList.add(leftList[leftIndex])
        leftIndex++
    }

    while (rightIndex < rightList.size) {
        newList.add(rightList[rightIndex])
        rightIndex++
    }

    return newList;
}

fun main(args: Array<String>) {
    val listOfNumbers = mutableListOf(4, 3, 1, 2)
    val sortedList = merge_sort(listOfNumbers)
    println("Unsorted: $listOfNumbers")
    println("Sorted: $sortedList")
}