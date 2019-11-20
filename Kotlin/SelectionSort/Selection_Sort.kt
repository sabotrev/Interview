
// Recursive selection sort
fun selection_sort(arr: IntArray, start: Int) {
    if (start < arr.size - 1) {
        var swappedArr = swap(arr, start, findMinIndex(arr, start))
        selection_sort(swappedArr, start + 1)
    }
}

// Find the position of the minimum value starting at the given index
fun findMinIndex(arr: IntArray, start: Int): Int {
    var minIndex: Int = start

    for (i in (start + 1) until (arr.size)) {
        if (arr.get(i) < arr.get(minIndex)) {
            minIndex = i
        }
    }

    return minIndex
}

fun findMinIndexKotlinStyle(arr: IntArray, start: Int): Int {
    var minValue: Int? = arr.sliceArray((start + 1) until (arr.size)).min()
    return arr.indexOf(minValue!!)
}

fun swap(arr: IntArray, index1: Int, index2: Int): IntArray {
    if (index1 !== index2) {
        var tempValue: Int = arr.get(index1)
        arr.set(index1, arr.get(index2))
        arr.set(index2, tempValue)
    }

    return arr
}

fun swapKotlinStyle(arr: IntArray, index1: Int, index2: Int): IntArray {
    var tempValue: Int = arr.get(index1)
    arr.set(index1, arr.get(index2)).also { arr.set(index2, tempValue) }
    return arr
}

fun main(arg: Array<String>) {
    var arr: IntArray = intArrayOf(4, 3, 1, 2)

    selection_sort(arr, 0)

    for (i in arr.indices) {
        print("${arr.get(i)} ")
    }
}
