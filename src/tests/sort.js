// const array = [];
const arr = []

// for (let i = 0; i < 100; i += 1) {
//     array.push(Math.floor(Math.random() * 100))
// }

for (let i = 0; i < 100; i += 1) {
    arr.push(Math.floor(Math.random() * 100))
}

// console.log(arr);
// bubbleSort(arr);
// betterBubbleSort(arr);
// selectSort(arr);
// insertionSort(arr);
console.log(quickSort(arr));

/**
 * 
 * @param {*} arr 
 * 冒泡
 */
function bubbleSort(arr) {
    const start = (new Date()).getTime()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    const end = (new Date()).getTime()
    const cost = end - start
    console.log(cost);
}

/**
 * 
 * @param {*} arr 
 * 改进冒泡
 */

function betterBubbleSort(arr) {
    const start = (new Date()).getTime()
    for (let i = 0; i < arr.length; i++) {
        let flag = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                flag = true
            }
        }
        if (!flag) return
    }
    const end = (new Date()).getTime()
    const cost = end - start
    console.log(cost);
}

/**
 * 
 * @param {*} arr 
 * 选择排序
 */
function selectSort(arr) {
    const start = (new Date()).getTime()
    for (let i = 0; i < arr.length - 1; i += 1) {
        let minIndex = i
        for (let j = i; j < arr.length; j += 1) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            const temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    const end = (new Date()).getTime()
    const cost = end - start
    console.log(cost);
}

/**
 * 
 * @param {*} arr 
 * 插入排序
 */
function insertionSort(arr) {
    const start = (new Date()).getTime()
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
            } else {
                break
            }
        }
    }
    const end = (new Date()).getTime()
    const cost = end - start
    console.log(cost);
}

/**
 * 希尔排序
 * @param {*} arr 
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [];
    const right = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < pivot) {
            left.push(arr[index]);
        } else {
            right.push(arr[index]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));

}
console.log(arr);