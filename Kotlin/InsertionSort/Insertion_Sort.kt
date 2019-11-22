
fun insertion_sort(arr: IntArray): IntArray {
  for (which in 1 until arr.size) {
    var whichValue: Int = arr.get(which)

    for (i in 0 until which) {
      if (arr.get(i) > whichValue) {
        /**
         * @param {Object} source_arr
         * @param {int} sourcePos
         * @param {Object} dest_arr
         * @param {int} destPos
         * @param {int} len
         */
        System.arraycopy(arr, i, arr, i + 1, which - i)
        arr.set(i, whichValue)
        break
      }
    }
  }

  return arr
}


fun main() {
    var arr: IntArray = intArrayOf(4, 3, 1, 2)

    insertion_sort(arr)

    for (i in arr.indices) {
        print("${arr.get(i)} ")
    }
}
