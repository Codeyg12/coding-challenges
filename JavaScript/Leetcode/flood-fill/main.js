const floodFill = (image, sr, sc, color) => {
  console.log("start", image);
  if (image[sr][sc] === color) return image;
  let startingRow = image[sr];
  let oldColor = startingRow[sc];

  navigateGrid(image, sr, sc, oldColor, color);
  console.log("finish", image);
};

const navigateGrid = (image, row, col, oldColor, newColor) => {
  if (
    row < 0 ||
    row >= image.length ||
    col < 0 ||
    col >= image[0].length ||
    image[row][col] !== oldColor
  )
    return;

  image[row][col] = newColor;

  navigateGrid(image, row - 1, col, oldColor, newColor);
  navigateGrid(image, row + 1, col, oldColor, newColor);
  navigateGrid(image, row, col - 1, oldColor, newColor);
  navigateGrid(image, row, col + 1, oldColor, newColor);
};

// image will be the array of arays
// sr will be the index of the array of arrays
// sc is the index of the single array
// color is what everything changes too

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);

// Output: [[2,2,2],[2,2,0],[2,0,1]]
