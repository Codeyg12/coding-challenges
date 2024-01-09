const flipAndInvertImage = (image) => {
  for (const arr of image) {
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] === 0 ? 1 : 0;
    }
  }
  console.log(image);
  return image;
};

flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);
// Output: [[1,0,0],[0,1,0],[1,1,1]]

flipAndInvertImage([
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
]);
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
