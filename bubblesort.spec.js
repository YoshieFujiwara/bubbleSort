describe('Bubble Sort', function() {
  xit('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
});

it('handles array with elements', function() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  //bubbleSort(arr);

  expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 8, 7]);
});
