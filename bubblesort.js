function bubbleSort(arr) {
  let finalArr = [];
  let swapCall = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 5; j++) {
      console.log('nested loop');
    }

    // if (arr[i] > arr[i + 1]) {
    //   console.log('num1', arr[i], 'num2', arr[i + 1]);
  }
  if (swapCall === 0) {
    console.log('no swap', arr);
    return arr;
  }
  //swap(arr[i], arr[i + 1]);
  // console.log(arr);

  console.log('finalArr', finalArr);
  return finalArr;
}

//if swap is never been called, means arr is already sorted.

// this swaps elements and returns in
function swap(num1, num2) {
  let temp = num1;
  (num1 = num2), (num2 = temp);
  swapCall += 1;
}
