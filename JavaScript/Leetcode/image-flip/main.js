const flipAndInvertImage = (image) => {
    console.log('?',image);
    for (const arr of image) {
        arr.reverse()
        for (let num in arr) {
            if (arr[num] == 0) {
                arr[num] = 1
            } else {
                arr[num] = 0
            }
        }
    }
    console.log('Answer',image);
    return image
}

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])
// Output: [[1,0,0],[0,1,0],[1,1,1]]


flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]  